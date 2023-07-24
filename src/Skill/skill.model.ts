import {PlayerModel} from "../Player/player.model";
import PlayerSkillModel from "../PlayerSkills/playerSkill.model";
import { sequelize, DataTypes } from "../database/db";

export const SkillModel = sequelize.define("skills", {
  skillId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  damage: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  heal: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  stun: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  stamina: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

});



// export default SkillModel;
