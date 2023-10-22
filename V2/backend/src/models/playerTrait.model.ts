import { Table, Column, Model, HasMany, AllowNull, Unique, Default, DataType, BelongsToMany,ForeignKey} from 'sequelize-typescript';
import Players from "../models/player.model";
import Trait from "../models/trait.model";

@Table
class Player_Traits extends Model {
  @ForeignKey(() => Players)
  @Column({
    type: DataType.INTEGER
  })
  playerId?: number;

  @ForeignKey(() => Trait)
  @Column({
    type: DataType.INTEGER
  })
  traitId?: number;
}

export default Player_Traits;