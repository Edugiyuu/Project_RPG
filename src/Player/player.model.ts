import { sequelize, DataTypes } from "../database/db";
import Skill from "../Skill/skill.model";
import Player_Skills from "../PlayerSkills/playerSkill.model";
import Trait from "../Trait/trait.model";
import Player_Traits from "../PlayerTraits/playerTrait.model";


const Player = sequelize.define("players", {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  hp: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 100,
  },
  attack: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 10,
  },
  stamina: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 5,
  },
  level: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  
});

Player.belongsToMany(Skill, {
  through: Player_Skills,
});

Skill.belongsToMany(Player, {
  through: Player_Skills,
});

Player.belongsToMany(Trait, {
  through: Player_Traits,
});

Trait.belongsToMany(Player, {
  through: Player_Traits,
});
export default Player;
