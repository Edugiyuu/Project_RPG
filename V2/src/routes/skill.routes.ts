import express from "express";
import { validate } from "../middleware/validate";
import {
  //createPlayerController,
  deleteSkillController,
  findAllSkillsController,
  findSkillController,
  updateSkillController,

} from "../controllers/skill.controller";
import { createSkillSchema, updateSkillSchema } from "../schemas/skill.schema";
import { Router } from "express";
import SkillController from "../controllers/skill.controller";

class SkillRoutes {
    router = Router();
    controller = new SkillController();
  
    constructor() {
      this.intializeRoutes();
    }
  
    intializeRoutes() {
      // Create a new Tutorial
      this.router.post("/", validate(createSkillSchema), this.controller.create);
  
      // Retrieve all Tutorials
      this.router.get("/", findAllSkillsController);
  
      // Retrieve all published Tutorials
     // this.router.get("/published", this.controller.findAllPlayersController);
  
      // Retrieve a single Tutorial with id
      this.router.get("/skill/:skillId",  findSkillController);
  
      // Update a Tutorial with id
      this.router.put("/skill/:skiilId", updateSkillController);
  
      // Delete a Tutorial with id
      this.router.delete("/skill/:skillId", deleteSkillController);
  
      // Delete all Tutorials
      //this.router.delete("/", this.controller.deleteAll);
    }
  }
  
  export default new SkillRoutes().router;