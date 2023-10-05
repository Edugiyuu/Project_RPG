import { sequelize, DataTypes } from "../database/db";
import Skill from "../Skill/skill.model";
import Player_Skills from "../PlayerSkills/playerSkill.model";
import Trait from "../Trait/trait.model";
import Player_Traits from "../PlayerTraits/playerTrait.model";
import { Table, Column, Model, HasMany, AllowNull, Unique, Default} from 'sequelize-typescript';


@Table
class Player extends Model {
  @Column
  @AllowNull(false)	
  @Unique(true)
  name: string;

  @Column
  @AllowNull(false)
  @Default(100)
  hp: Number;

  @Column
  @AllowNull(false)
  @Default(10)
  attack: Number;

  @Column
  @AllowNull(false)
  @Default(5)
  stamina: Number;

  @Column
  @AllowNull(false)
  @Default(1)
  level: Number;

  @Column
  @AllowNull(false)
  @Default(0)
  mobsKilled: Number;


  @BelongsToMany(() => Skill, () => Player_Skills)
  skills: [];
}

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
  mobsKilled: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
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
