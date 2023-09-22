import { sequelize, DataTypes } from "../database/db";
import Skill from "../Skill/skill.model";
import Mob_Skills from "../MobSkills/mobSkill.model";

const MobModel = sequelize.define("mobs", {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  hp: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  attack: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

 
});

MobModel.belongsToMany(Skill, {
  through: Mob_Skills,
});

Skill.belongsToMany(MobModel, {
  through: Mob_Skills,
});
export default MobModel;
