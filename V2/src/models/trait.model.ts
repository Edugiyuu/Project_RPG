import { Table, Column, Model, HasMany, AllowNull, Unique, Default, DataType, BelongsToMany} from 'sequelize-typescript';
import Player from './player.model';
import Player_Traits from './playerTrait.model';

@Table
class Trait extends Model {
    @Column({
        type: DataType.STRING(255)
      })
      name?: string;

      @Column({
        type: DataType.STRING(255)
      })
      description?: string;

      @Column({
        type: DataType.STRING(255)
      })
      type?: string;

      @Column({
        type: DataType.INTEGER
      })
      damageBonus?: number;

      @Column({
        type: DataType.INTEGER
      })
      hpBonus?: number;

      @Column({
        type: DataType.BOOLEAN
      })
      dodge?: boolean;

      @Column({
        type: DataType.INTEGER
      })
      staminaBonus?: number;

      @Column({
        type: DataType.BOOLEAN
      })
      revive?: boolean;

      @BelongsToMany(() => Player, () => Player_Traits)
      player?: Array<Player & {Player_Traits: Player_Traits}>;
}

export default Trait;