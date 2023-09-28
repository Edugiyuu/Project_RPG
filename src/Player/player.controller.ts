import { Request, Response } from "express";
import Player from "./player.model";
import {
  CreatePlayerInput,
  FilterPlayerQueryInput,
  ParamsPlayerInput,
  UpdatePlayerInput,
} from "./player.schema";
import Skill from "../Skill/skill.model";
import { where } from "sequelize";
import Trait from "../Trait/trait.model";

export const createPlayerController = async (
  req: Request<{}, {}, CreatePlayerInput>,
  res: Response
) => {
  try {

    const { name,} = req.body;
    const fulano = await Player.create({
      name,
    });

    const skillIds = [1,2]

    const habilidades = [];

    for (let i = 0; i < skillIds.length; i++) {
      const skillId = skillIds[i];

      const habilidade = await Skill.findByPk(skillId);

      if (habilidade) {
        habilidades.push(habilidade);
      }
    }
    await fulano.addSkills(habilidades);

   


   /*  const traits = [];

    for (let i = 0; i < traitIds.length; i++) {

      const traitId = traitIds[i];

      const trait = await Trait.findByPk(traitId);

      if (trait) {
        traits.push(trait);
      }
    }
    await fulano.addTraits(traits); */

    res.status(201).json({
      status: "success",
      data: {
        fulano,
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

export const updatePlayerController = async (
  req: Request<UpdatePlayerInput["params"], {}, UpdatePlayerInput["body"]>,
  res: Response
) => {
  try {
    const result = await Player.update(
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

    const note = await Player.findByPk(req.params.playerId);

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
    const player = await Player.findByPk(req.params.playerId, {
      include: [
        { model: Skill },
        { model: Trait },
      ]
    });
    
    console.log(player);
    
    if (!player) {
      return res.status(404).json({
        status: "fail",
        message: "Player with that ID not found",
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

    const players = await Player.findAll({
      limit,
      offset: skip,
      include: [
        { model: Skill },
        { model: Trait },
      ]
    });
    console.log("🚀 ~ file: player.controller.ts:130 ~ players:", players);

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
    const result = await Player.destroy({
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
