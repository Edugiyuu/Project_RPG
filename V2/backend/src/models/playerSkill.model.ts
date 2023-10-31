import Player from "../models/player.model";
import Skill from "../models/skill.model";

import { Table, Column, Model, HasMany, AllowNull, Unique, Default, DataType, BelongsToMany,ForeignKey, BelongsTo} from 'sequelize-typescript';



@Table
export class Player_Skills extends Model<Player_Skills> {
  @ForeignKey(() => Player)
  @Column
  playerId?: number;

  @ForeignKey(() => Skill)
  @Column
  skillId?: number;

  @BelongsTo(() => Player)
  player?: Player;

  @BelongsTo(() => Skill)
  skill?: Skill;
}

export default Player_Skills;