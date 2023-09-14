import { sequelize, DataTypes } from "../database/db";

const Skill = sequelize.define("skills", {
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
    allowNull: false,
  },
  stun: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  stamina: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  mobSkill: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
  
});
/* damage,
      heal,
      stun,
      stamina, */
export default Skill;
