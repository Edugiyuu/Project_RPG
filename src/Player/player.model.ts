import Skill from "../Skill/skill.model";
import Player_Skills from "../PlayerSkills/playerSkill.model";
import Trait from "../Trait/trait.model";
import Player_Traits from "../PlayerTraits/playerTrait.model";
import { Table, Column, Model, HasMany, AllowNull, Unique, Default, DataType, BelongsToMany} from 'sequelize-typescript';
import { sequelize } from "../database/db";


@Table //({ tableName: 'Player' })
class Players extends Model {
  @AllowNull(false)
  @Unique(true)
  @Column
  name: string;

  @AllowNull(false)
  @Default(100)
  @Column
  hp: number;

  @AllowNull(false)
  @Default(10)
  @Column
  attack: number;

  @AllowNull(false)
  @Default(5)
  @Column
  stamina: number;

  @AllowNull(false)
  @Default(1)
  @Column
  level: number;

  @AllowNull(false)
  @Default(0)
  @Column
  mobsKilled: number;

   @BelongsToMany(() => Skill, () => Player_Skills)
  skills: Skill[]; 

   @BelongsToMany(() => Trait, () => Player_Traits)
  traits: Trait[];   
}




/* const Player = sequelize.define("players", {
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
  
}); */

/* Player.belongsToMany(Skill, {
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
}); */
export default Players;
