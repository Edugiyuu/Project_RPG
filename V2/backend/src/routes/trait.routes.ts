import express from "express";
import { validate } from "../middleware/validate";
import {
  //createPlayerController,
  deleteTraitController,
  findAllTraitsController,
  findTraitController,
  updateTraitController,

} from "../controllers/trait.controller";
import { createTraitSchema, updateTraitSchema } from "../schemas/trait.schema";
import { Router } from "express";
import TraitController from "../controllers/trait.controller";

class TraitRoutes {
    router = Router();
    controller = new TraitController();
  
    constructor() {
      this.intializeRoutes();
    }
  
    intializeRoutes() {
      // Create a new Tutorial
      this.router.post("/", validate(createTraitSchema), this.controller.create);
  
      // Retrieve all Tutorials
      this.router.get("/", findAllTraitsController);
  
      // Retrieve all published Tutorials
     // this.router.get("/published", this.controller.findAllPlayersController);
  
      // Retrieve a single Tutorial with id
      this.router.get("/trait/:traitId",  findTraitController);
  
      // Update a Tutorial with id
      this.router.put("/trait/:traitId", updateTraitController);
  
      // Delete a Tutorial with id
      this.router.delete("/trait/:traitId", deleteTraitController);
  
      // Delete all Tutorials
      //this.router.delete("/", this.controller.deleteAll);
    }
  }
  
  export default new TraitRoutes().router;