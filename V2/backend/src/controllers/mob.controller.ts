import { Request, Response } from "express";
import MobModel from "../models/mob.model";
import {
  CreateMobInput,
  FilterMobQueryInput,
  ParamsMobInput,
  UpdateMobInput,
} from "../schemas/mob.schema";
import Skill from "../models/skill.model";

export default class MobController {
    async create(req: Request, res: Response) {
      if (!req.body.name) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
  try {
    const { name, hp, attack, skillIds} = req.body;

    const mob = await MobModel.create({
      name,
      hp,
      attack,
      skillIds
    });

    const habilidades = [];

    for (let i = 0; i < skillIds.length; i++) {
      const skillId = skillIds[i];

      const habilidade = await Skill.findByPk(skillId);

      if (habilidade) {
        habilidades.push(habilidade);
      }
    }
    //await mob.addSkills(habilidades);

    res.status(201).json({
      status: "success",
      data: {
        mob,
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
}};

export const updateMobController = async (
  req: Request<UpdateMobInput["params"], {}, UpdateMobInput["body"]>,
  res: Response
) => {
  try {
    const result = await MobModel.update(
      { ...req.body, updatedAt: Date.now() },
      {
        where: {
          id: req.params.mobId,
        },
      }
    );

    if (result[0] === 0) {
      return res.status(404).json({
        status: "fail",
        message: "Note with that ID not found",
      });
    }

    const mob = await MobModel.findByPk(req.params.mobId);

    res.status(200).json({
      status: "success",
      data: {
        mob,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const findMobController = async (
  req: Request<ParamsMobInput>,
  res: Response
) => {
  try {
    const mob = await MobModel.findByPk(req.params.mobId, {include: Skill});

    if (!mob) {
      return res.status(404).json({
        status: "fail",
        message: "Note with that ID not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        mob,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const findAllMobsController = async (
  req: Request<{}, {}, {}, FilterMobQueryInput>,
  res: Response
) => {
  try {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const skip = (page - 1) * limit;

    const mobs = await MobModel.findAll({ limit, offset: skip, include: Skill,});

    res.status(200).json({
      status: "success",
      results: mobs.length,
      mobs,
    });
  } catch (error: any) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const deleteMobController = async (
  req: Request<ParamsMobInput>,
  res: Response
) => {
  try {
    const result = await MobModel.destroy({
      where: { id: req.params.mobId },
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
