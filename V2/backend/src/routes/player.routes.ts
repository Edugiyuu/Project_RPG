import express from "express";
import { validate } from "../middleware/validate";
import {
  //createPlayerController,
  deletePlayerController,
  findAllPlayersController,
  findPlayerController,
  updatePlayerController,

} from "../controllers/player.controller";
import { createPlayerSchema, updatePlayerSchema } from "../schemas/player.schema";
import { Router } from "express";
import PlayerController from "../controllers/player.controller";


class PlayerRoutes {
  router = Router();
  controller = new PlayerController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    // Create a new Tutorial
    this.router.post("/", validate(createPlayerSchema), this.controller.create);

    // Retrieve all Tutorials
    this.router.get("/", findAllPlayersController);

    // Retrieve all published Tutorials
   // this.router.get("/published", this.controller.findAllPlayersController);

    // Retrieve a single Tutorial with id
    this.router.get("/player/:playerId",  findPlayerController);

    // Update a Tutorial with id
    this.router.put("/player/:playerId", updatePlayerController);

    // Delete a Tutorial with id
    this.router.delete("/player/:playerId", deletePlayerController);

    // Delete all Tutorials
    //this.router.delete("/", this.controller.deleteAll);
  }
}

export default new PlayerRoutes().router;