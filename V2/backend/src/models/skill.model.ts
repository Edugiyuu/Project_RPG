import { Table, Column, Model, HasMany, AllowNull, Unique, Default, DataType, BelongsToMany, PrimaryKey} from 'sequelize-typescript';
import Player from './player.model';
import Player_Skills from './playerSkill.model';
import Mob from './mob.model';
import Mob_Skills from './mobSkill.model';


@Table
 class Skill extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER
  })
  skillId: number;

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

    @BelongsToMany(() => Mob, () => Mob_Skills)
  mobs?: Mob[];   
}


/* Skill.belongsToMany(Player, {
  through: Player_Skills,
  foreignKey: 'playerId',

}); */

/* Skill.belongsToMany(Mob, {
  through: Mob_Skills,
  foreignKey: 'mobId',

}); */

export default Skill;
