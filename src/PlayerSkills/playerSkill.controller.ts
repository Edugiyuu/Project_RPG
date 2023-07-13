import { Request, Response } from "express";
import {
  CreateSkillInput,
  FilterSkillQueryInput,
  ParamsSkillInput,
  UpdateSkillInput,
} from "./playerSkill.schema";
import PlayerSkillModel from "./playerSkill.model";

export const createPlayerSkillController = async (
  req: Request<{}, {}, CreateSkillInput>,
  res: Response
) => {
  try {
    const { playerId, skillId} = req.body;

    const playerSkill = await PlayerSkillModel.create({
      playerId,
      skillId
    });

    res.status(201).json({
      status: "success",
      data: {
        playerSkill,
      },
    });
  } catch (error: any) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(409).json({
        status: "failed",
      });
    }

    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const updatePlayerSkillController = async (
  req: Request<UpdateSkillInput["params"], {}, UpdateSkillInput["body"]>,
  res: Response
) => {
  try {
    const result = await PlayerSkillModel.update(
      { ...req.body, updatedAt: Date.now() },
      {
        where: {
          id: req.params.playerSkillId,
        },
      }
    );

    if (result[0] === 0) {
      return res.status(404).json({
        status: "fail",
        message: "Note with that ID not found",
      });
    }

    const skill = await PlayerSkillModel.findByPk(req.params.playerSkillId);

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

export const findPlayerSkillController = async (
  req: Request<ParamsSkillInput>,
  res: Response
) => {
  try {
    const skill = await PlayerSkillModel.findByPk(req.params.playerSkillId);

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

export const findAllPlayerSkillsController = async (
  req: Request<{}, {}, {}, FilterSkillQueryInput>,
  res: Response
) => {
  try {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const skip = (page - 1) * limit;

    const playerSkills = await PlayerSkillModel.findAll({ limit, offset: skip });

    res.status(200).json({
      status: "success",
      results: playerSkills.length,
      playerSkills,
    });
  } catch (error: any) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const deletePlayerSkillController = async (
  req: Request<ParamsSkillInput>,
  res: Response
) => {
  try {
    const result = await PlayerSkillModel.destroy({
      where: { id: req.params.playerSkillId },
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
