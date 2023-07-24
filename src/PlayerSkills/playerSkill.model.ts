import {PlayerModel} from "../Player/player.model";
import {SkillModel} from "../Skill/skill.model";
import { sequelize, DataTypes } from "../database/db";

export const PlayerSkillModel = sequelize.define("playerSkills", {
  playerSkillId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

});



export default PlayerSkillModel;
