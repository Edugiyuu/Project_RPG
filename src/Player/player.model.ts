import { sequelize, DataTypes } from "../database/db";
import Skill from "../Skill/skill.model";
import Player_Skills from "../PlayerSkills/playerSkill.model";

const Player = sequelize.define("players", {
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

Player.belongsToMany(Skill, {
  through: Player_Skills,
});

Skill.belongsToMany(Player, {
  through: Player_Skills,
});

export default Player;
