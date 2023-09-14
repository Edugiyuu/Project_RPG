import { Request, Response } from "express";
import {
  CreateSkillInput,
  FilterSkillQueryInput,
  ParamsSkillInput,
  UpdateSkillInput,
} from "./skill.schema";
import Skill from "./skill.model";

export const createSkillController = async (
  req: Request<{}, {}, CreateSkillInput>,
  res: Response
) => {
  try {
    const { name, damage, heal, stun, stamina, mobSkill } = req.body;

    const skill = await Skill.create({
      name,
      damage,
      heal,
      stun,
      stamina,
      mobSkill
    });

    res.status(201).json({
      status: "success",
      data: {
        skill,
      },
    });
  } catch (error: any) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(409).json({
        status: "failed",
        message: "Note with that title already exists",
      });
    }

    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const updateSkillController = async (
  req: Request<UpdateSkillInput["params"], {}, UpdateSkillInput["body"]>,
  res: Response
) => {
  try {
    const result = await Skill.update(
      { ...req.body, updatedAt: Date.now() },
      {
        where: {
          id: req.params.skillId,
        },
      }
    );

    if (result[0] === 0) {
      return res.status(404).json({
        status: "fail",
        message: "Note with that ID not found",
      });
    }

    const skill = await Skill.findByPk(req.params.skillId);

    res.status(200).json({
      status: "success",
      data: {
        skill,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const findSkillController = async (
  req: Request<ParamsSkillInput>,
  res: Response
) => {
  try {
    const skill = await Skill.findByPk(req.params.skillId);

    if (!skill) {
      return res.status(404).json({
        status: "fail",
        message: "Note with that ID not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        skill,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const findAllSkillsController = async (
  req: Request<{}, {}, {}, FilterSkillQueryInput>,
  res: Response
) => {
  try {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const skip = (page - 1) * limit;

    const skills = await Skill.findAll({ limit, offset: skip });

    res.status(200).json({
      status: "success",
      results: skills.length,
      skills,
    });
  } catch (error: any) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const deleteSkillController = async (
  req: Request<ParamsSkillInput>,
  res: Response
) => {
  try {
    const result = await Skill.destroy({
      where: { id: req.params.skillId },
      force: true,
    });

    if (result === 0) {
      return res.status(404).json({
        status: "fail",
        message: "Note with that ID not found",
      });
    }

    res.status(204).json();
  } catch (error: any) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
