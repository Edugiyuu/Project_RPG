import PlayerModel from "../Player/player.model";
import SkillModel from "../Skill/skill.model";
import { sequelize, DataTypes } from "../database/db";

export const PlayerSkillModel = sequelize.define("playerSkills", {
  

});

PlayerModel.hasOne(PlayerSkillModel, {
  foreignKey: 'playerId',
  sourceKey: 'playerId'
  
})
PlayerSkillModel.belongsTo(PlayerModel, {
  foreignKey: 'playerId',
});

SkillModel.hasOne(PlayerSkillModel, {
  foreignKey: 'skillId',
  sourceKey: 'skillId'
  
})
PlayerSkillModel.belongsTo(SkillModel, {
  foreignKey: 'skillId',
});

export default PlayerSkillModel;
