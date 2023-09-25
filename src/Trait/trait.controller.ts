import { Request, Response } from "express";
import {
  CreateTraitInput,
  FilterTraitQueryInput,
  ParamsTraitInput,
  UpdateTraitInput,
} from "./trait.schema";
import Trait from "./trait.model";

export const createTraitController = async (
  req: Request<{}, {}, CreateTraitInput>,
  res: Response
) => {
  try {
    const {name,
      description,
      type,
      damageBonus,
      hpBonus,
      dodge,
      staminaBonus,
      revive } = req.body;

    const trait = await Trait.create({
      name,
      description,
      type,
      damageBonus,
      hpBonus,
      dodge,
      staminaBonus,
      revive
    });

    res.status(201).json({
      status: "success",
      data: {
        trait,
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

export const updateTraitController = async (
  req: Request<UpdateTraitInput["params"], {}, UpdateTraitInput["body"]>,
  res: Response
) => {
  try {
    const result = await Trait.update(
      { ...req.body, updatedAt: Date.now() },
      {
        where: {
          id: req.params.traitId,
        },
      }
    );

    if (result[0] === 0) {
      return res.status(404).json({
        status: "fail",
        message: "Note with that ID not found",
      });
    }

    const trait = await Trait.findByPk(req.params.traitId);

    res.status(200).json({
      status: "success",
      data: {
        trait,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const findTraitController = async (
  req: Request<ParamsTraitInput>,
  res: Response
) => {
  try {
    const trait = await Trait.findByPk(req.params.traitId);

    if (!trait) {
      return res.status(404).json({
        status: "fail",
        message: "Note with that ID not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        trait,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const findAllTraitsController = async (
  req: Request<{}, {}, {}, FilterTraitQueryInput>,
  res: Response
) => {
  try {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const skip = (page - 1) * limit;

    const traits = await Trait.findAll({ limit, offset: skip });

    res.status(200).json({
      status: "success",
      results: traits.length,
      traits,
    });
  } catch (error: any) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const deleteTraitController = async (
  req: Request<ParamsTraitInput>,
  res: Response
) => {
  try {
    const result = await Trait.destroy({
      where: { id: req.params.traitId },
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
