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


/* @Table
class Player_Skills extends Model {
  @ForeignKey(() => Players)
  @Column({
    type: DataType.INTEGER
  })
  playerId?: number;

  @ForeignKey(() => Skill)
  @Column({
    type: DataType.INTEGER
  })
  skillId?: number;
} */

export default Player_Skills;