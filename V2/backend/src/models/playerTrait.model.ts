import { Table, Column, Model, HasMany, AllowNull, Unique, Default, DataType, BelongsToMany,ForeignKey, BelongsTo} from 'sequelize-typescript';
import Player from "../models/player.model";
import Trait from "../models/trait.model";

@Table
export class Player_Traits extends Model<Player_Traits> {
  @ForeignKey(() => Player)
  @Column
  playerId?: number;

  @ForeignKey(() => Trait)
  @Column
  traitId?: number;

  @BelongsTo(() => Player)
  player?: Player;

  @BelongsTo(() => Trait)
  trait?: Trait;
}

export default Player_Traits;