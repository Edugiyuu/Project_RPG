import express from "express";
import { validate } from "./middleware/validate";
import {
  createPlayerController,
  deletePlayerController,
  findAllPlayersController,
  findPlayerController,
  updatePlayerController,

} from "./Player/player.controller";
import { createPlayerSchema, updatePlayerSchema } from "./Player/player.schema";

import {
  createMobController,
  deleteMobController,
  findAllMobsController,
  findMobController,
  updateMobController
  
} from "./Mob/mob.controller";
import { createMobSchema, updateMobSchema } from "./Mob/mob.schema";

import {
  createSkillController,
  deleteSkillController,
  findAllSkillsController,
  findSkillController,
  updateSkillController
  
} from "./Skill/skill.controller";
import { createSkillSchema, updateSkillSchema } from "./Skill/skill.schema";

import {
  createTraitController,
  deleteTraitController,
  findAllTraitsController,
  findTraitController,
  updateTraitController
  
} from "./Trait/trait.controller";
import { createTraitSchema, updateTraitSchema } from "./Trait/trait.schema";
//--------------------------------


const router = express.Router();
//---------------------Player--------------------------
router
  .route("/player")
  .get(findAllPlayersController)
  .post(validate(createPlayerSchema), createPlayerController);
router
  .route("/player/:playerId")
  .get(findPlayerController)
  .patch(validate(updatePlayerSchema), updatePlayerController)
  .delete(deletePlayerController);
//---------------------Mob-------------------------------
router
  .route("/mob")
  .get(findAllMobsController)
  .post(validate(createMobSchema),createMobController)
router
  .route("/mob/:mobId")
  .get(findMobController)
  .patch(validate(updateMobSchema), updateMobController)
  .delete(deleteMobController);
//-----------------------Skill------------------------------
router
  .route("/skill")
  .get(findAllSkillsController)
  .post(validate(createSkillSchema),createSkillController)
router
  .route("/skill/:skillId")
  .get(findSkillController)
  .patch(validate(updateSkillSchema), updateSkillController)
  .delete(deleteSkillController);

  //-----------------------Traits------------------------------

  router
  .route("/trait")
  .get(findAllTraitsController)
  .post(validate(createTraitSchema),createTraitController)
  router
  .route("/trait/:traitId")
  .get(findTraitController)
  .patch(validate(updateTraitSchema), updateTraitController)
  .delete(deleteTraitController);

export default router;
