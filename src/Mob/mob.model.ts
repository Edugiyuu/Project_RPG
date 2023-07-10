import { sequelize, DataTypes } from "../database/db";

const MobModel = sequelize.define("mobs", {
  mobId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
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

export default MobModel;
