import { sequelize, DataTypes } from "../database/db";
import Skill from "../Skill/skill.model";
import Mob_Skills from "../MobSkills/mobSkill.model";


import { Table, Column, Model, HasMany, AllowNull, Unique, Default, DataType, BelongsToMany} from 'sequelize-typescript';

@Table
class MobModel extends Model {
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

  @BelongsToMany(() => Skill, () => Mob_Skills)
  skills: Skill[]; 

}

/* const MobModel = sequelize.define("mobs", {
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
 */
/* MobModel.belongsToMany(Skill, {
  through: Mob_Skills,
});

Skill.belongsToMany(MobModel, {
  through: Mob_Skills,
}); */
export default MobModel;
