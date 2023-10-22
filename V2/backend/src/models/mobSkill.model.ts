import MobModel from "../models/mob.model";
import Player from "../models/player.model";
import Skill from "../models/skill.model";

import { Table, Column, Model, HasMany, AllowNull, Unique, Default, DataType, BelongsToMany,ForeignKey} from 'sequelize-typescript';

@Table
class Mob_Skills extends Model {
  @ForeignKey(() => MobModel)
  @Column({
    type: DataType.INTEGER
  })
  mobId?: number;

  @ForeignKey(() => Skill)
  @Column({
    type: DataType.INTEGER
  })
  skillId?: number;
}

export default Mob_Skills;