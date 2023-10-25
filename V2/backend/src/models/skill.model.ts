import { Table, Column, Model, HasMany, AllowNull, Unique, Default, DataType, BelongsToMany} from 'sequelize-typescript';
import Player from './player.model';
import Player_Skills from './playerSkill.model';


@Table
 class Skill extends Model {
  @Column({
    type: DataType.STRING(255)
  })
  name?: string;

  @Column({
    type: DataType.INTEGER
  })
  damage?: number;

  @Column({
    type: DataType.INTEGER
  })
  heal?: number;

  @Column({
    type: DataType.BOOLEAN
  })
  stun?: boolean;

  @Column({
    type: DataType.INTEGER
  })
  stamina?: number;

  @Column({
    type: DataType.BOOLEAN
  })
  mobSkill?: boolean;


  
  /* @BelongsToMany(() => Player, () => Player_Skills)
  player?: Array<Player & {Player_Skills: Player_Skills}>; */

   @BelongsToMany(() => Player, () => Player_Skills)
  players?: Player[]; 
}


/* Skill.belongsToMany(Player, {
  through: Player_Skills,
  foreignKey: 'playerId',

}); */

export default Skill;
