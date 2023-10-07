import Player from "../Player/player.model";
import Skill from "../Skill/skill.model";
import { sequelize, DataTypes } from "../database/db";
import { Table, Column, Model, HasMany, AllowNull, Unique, Default, DataType, BelongsToMany,ForeignKey} from 'sequelize-typescript';

@Table
class Player_Skills extends Model {
  @ForeignKey(() => Player)
  @Column
  playerId: number;

  @ForeignKey(() => Skill)
  @Column
  skillId: number;
}

export default Player_Skills;
