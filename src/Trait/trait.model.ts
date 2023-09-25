import { sequelize, DataTypes } from "../database/db";

const Trait = sequelize.define("traits", {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(150),
  },
  type: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  damageBonus: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  hpBonus: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  dodge: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  staminaBonus: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  revive: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  
});
/* damage,
      heal,
      stun,
      stamina, */
export default Trait;
