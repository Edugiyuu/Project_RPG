import { Request, Response } from "express";
import Players from "./player.model";
import {
  CreatePlayerInput,
  FilterPlayerQueryInput,
  ParamsPlayerInput,
  UpdatePlayerInput,
} from "./player.schema";
import Skill from "../Skill/skill.model";
import { where } from "sequelize";
import Trait from "../Trait/trait.model";

import { Sequelize } from 'sequelize-typescript';
import Player_Skills from "../PlayerSkills/playerSkill.model";
import Player_Traits from "../PlayerTraits/playerTrait.model";

const sequelize = new Sequelize({
  database: 'node_sequelize',
  dialect: 'postgres',
  username: 'admin',
  password: 'password123',
  host: 'localhost',
  port: 6500,
  storage: ':memory:',
  models: [Players,Player_Skills,Skill,Trait,Player_Traits] // or [Player, Team],
});    

export const createPlayerController = async (
  req: Request<{}, {}, CreatePlayerInput>,
  res: Response
) => {
  try {

    const { name,} = req.body;
    const fulano = await Players.create({
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

    
    const comumTraits = await Trait.findAll({ where: { type: "Comum" } });
    const traits = [];

    const randomId = Math.floor(Math.random() * comumTraits.length);
    const randomTrait = comumTraits[randomId];
    traits.push(randomTrait);

    await fulano.addTraits(traits);

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


    const updatedPlayer = await Players.findByPk(req.params.playerId);

    if (req.body.mobsKilled) {
      updatedPlayer.level += 1;
      updatedPlayer.hp += 10;
      updatedPlayer.stamina += 1;
      updatedPlayer.attack += 1;

      await updatedPlayer.save();
    }
    


    const result = await Players.update(
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

    const note = await Players.findByPk(req.params.playerId);

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
    const player = await Players.findByPk(req.params.playerId, {
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

    const players = await Players.findAll({
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
    const result = await Players.destroy({
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
