

import { Table, Column, Model, HasMany, AllowNull, Unique, Default, DataType, BelongsToMany,ForeignKey} from 'sequelize-typescript';
import Players from "../Player/player.model";
import Trait from "../Trait/trait.model";

@Table
class Player_Traits extends Model {
  @ForeignKey(() => Players)
  @Column
  playerId: number;

  @ForeignKey(() => Trait)
  @Column
  traitId: number;
}

export default Player_Traits;
