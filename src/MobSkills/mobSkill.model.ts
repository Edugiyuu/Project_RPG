import Player from "../Player/player.model";
import Skill from "../Skill/skill.model";
import { sequelize, DataTypes } from "../database/db";

const Mob_Skills = sequelize.define(
  "mob_skills",
  {},
  { timestamps: false }
);

export default Mob_Skills;
