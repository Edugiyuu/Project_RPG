import MobModel from "../Mob/mob.model";
import Player from "../Player/player.model";
import Skill from "../Skill/skill.model";
import { sequelize, DataTypes } from "../database/db";

import { Table, Column, Model, HasMany, AllowNull, Unique, Default, DataType, BelongsToMany,ForeignKey} from 'sequelize-typescript';

@Table
class Mob_Skills extends Model {
  @ForeignKey(() => MobModel)
  @Column
  mobId: number;

  @ForeignKey(() => Skill)
  @Column
  skillId: number;
}

export default Mob_Skills;
