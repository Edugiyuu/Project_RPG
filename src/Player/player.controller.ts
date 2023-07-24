import { Request, Response } from "express";
import {PlayerModel} from "./player.model";
import {
  CreatePlayerInput,
  FilterPlayerQueryInput,
  ParamsPlayerInput,
  UpdatePlayerInput,
} from "./player.schema";
import {SkillModel} from "../Skill/skill.model";

export const createPlayerController = async (
  req: Request<{}, {}, CreatePlayerInput>,
  res: Response
) => {
  try {
    const { name, hp, attack, stamina, level} = req.body;
    const skill = await SkillModel.findByPk("bf2417d0-7136-4a32-b84f-ce211d475917")
    const player = await PlayerModel.create({
      name,
      hp,
      attack,
      stamina,
      level,
    });
    //player.addSkillModel([skill])
    res.status(201).json({
      status: "success",
      data: {
        player,
      }
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

export const updatePlayerController = async (
  req: Request<UpdatePlayerInput["params"], {}, UpdatePlayerInput["body"]>,
  res: Response
) => {
  try {
    const result = await PlayerModel.update(
      { ...req.body, updatedAt: Date.now() },
      {
        where: {
          id: req.params.playerId,
        },
      }
    );

    if (result[0] === 0) {
      return res.status(404).json({
        status: "fail",
        message: "Note with that ID not found",
      });
    }

    const note = await PlayerModel.findByPk(req.params.playerId);

    res.status(200).json({
      status: "success",
      data: {
        note,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const findPlayerController = async (
  req: Request<ParamsPlayerInput>,
  res: Response
) => {
  try {
    const player = await PlayerModel.findByPk(req.params.playerId);

    if (!player) {
      return res.status(404).json({
        status: "fail",
        message: "Note with that ID not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        player,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const findAllPlayersController = async (
  req: Request<{}, {}, {}, FilterPlayerQueryInput>,
  res: Response
) => {
  try {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const skip = (page - 1) * limit;

    const players = await PlayerModel.findAll({ limit, offset: skip });

    res.status(200).json({
      status: "success",
      results: players.length,
      players,
    });
  } catch (error: any) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const deletePlayerController = async (
  req: Request<ParamsPlayerInput>,
  res: Response
) => {
  try {
    const result = await PlayerModel.destroy({
      where: { id: req.params.playerId },
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


