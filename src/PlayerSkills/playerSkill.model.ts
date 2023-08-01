import Player from "../Player/player.model";
import Skill from "../Skill/skill.model";
import { sequelize, DataTypes } from "../database/db";

const Player_Skills = sequelize.define(
  "player_skills",
  {},
  { timestamps: false }
);

export default Player_Skills;
