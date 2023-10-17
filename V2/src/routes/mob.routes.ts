import { validate } from "../middleware/validate";
import {
  //createPlayerController,
  deleteMobController,
  findAllMobsController,
  findMobController,
  updateMobController,

} from "../controllers/mob.controller";
import { createMobSchema, updateMobSchema } from "../schemas/mob.schema";
import { Router } from "express";
import MobController from "../controllers/mob.controller";


class MobRoutes {
  router = Router();
  controller = new MobController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    // Create a new Tutorial
    this.router.post("/", validate(createMobSchema), this.controller.create);

    // Retrieve all Tutorials
    this.router.get("/", findAllMobsController);

    // Retrieve all published Tutorials
   // this.router.get("/published", this.controller.findAllPlayersController);

    // Retrieve a single Tutorial with id
    this.router.get("/mob/:mobId",  findMobController);

    // Update a Tutorial with id
    this.router.put("/mob/:mobId", updateMobController);

    // Delete a Tutorial with id
    this.router.delete("/mob/:mobId", deleteMobController);

    // Delete all Tutorials
    //this.router.delete("/", this.controller.deleteAll);
  }
}

export default new MobRoutes().router;