import Mob from "../models/mob.model";
import Player from "../models/player.model";
import Skill from "../models/skill.model";

import { Table, Column, Model, HasMany, AllowNull, Unique, Default, DataType, BelongsToMany,ForeignKey, BelongsTo} from 'sequelize-typescript';


 @Table
export class Mob_Skills extends Model<Mob_Skills> {
  @ForeignKey(() => Mob)
  @Column
  mobId?: number;

  @ForeignKey(() => Skill)
  @Column
  skillId?: number;

  @BelongsTo(() => Mob)
  mobs?: Mob;

  @BelongsTo(() => Skill)
  skill?: Skill;
} 

export default Mob_Skills;