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
//--------------------------------
import {
  createPlayerSkillController,
  deletePlayerSkillController,
  findAllPlayerSkillsController,
  findPlayerSkillController,
  updatePlayerSkillController
  
} from "./PlayerSkills/playerSkill.controller";
import { createPlayerSkillSchema, updatePlayerSkillSchema } from "./PlayerSkills/playerSkill.schema";


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

  //-----------------------PlayerSkills------------------------------
router
.route("/playerSkill")
.get(findAllPlayerSkillsController)
.post(validate(createPlayerSkillSchema),createPlayerSkillController)
router
.route("/playerSkill/:id")
.get(findPlayerSkillController)
.patch(validate(updatePlayerSkillSchema), updatePlayerSkillController)
.delete(deletePlayerSkillController);

export default router;
