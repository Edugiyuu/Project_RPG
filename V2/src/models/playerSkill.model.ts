import Players from "../models/player.model";
import Skill from "../models/skill.model";

import { Table, Column, Model, HasMany, AllowNull, Unique, Default, DataType, BelongsToMany,ForeignKey} from 'sequelize-typescript';

@Table
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
}

export default Player_Skills;