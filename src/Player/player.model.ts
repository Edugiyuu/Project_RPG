import { sequelize, DataTypes } from "../database/db";
import { SkillModel } from "../Skill/skill.model";

export const PlayerModel = sequelize.define("players", {
  playerId: {
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
  stamina: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  level: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  
});
PlayerModel.hasMany(SkillModel, {
  foreignKey: 'playerId',
  sourceKey: 'playerId'
  
})
SkillModel.belongsTo(PlayerModel, {
  foreignKey: 'playerId',
});

export default PlayerModel;
