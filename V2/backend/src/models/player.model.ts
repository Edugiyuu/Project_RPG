import { Table, Column, Model, HasMany, AllowNull, Unique, Default, DataType, BelongsToMany} from 'sequelize-typescript';
import Skill from '../models/skill.model';
import Trait from '../models/trait.model';
import Player_Traits from './playerTrait.model'
import Player_Skills from './playerSkill.model';

@Table //({ tableName: 'Player' })
class Player extends Model{
  @AllowNull(false)
  @Column({
    type: DataType.STRING(255),
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 100
  })
  hp?: number;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 10
  })
  attack?: number;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 10
  })
  stamina?: number;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 1
  })
  level?: number;
  

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0
  })
  mobsKilled?: number;
  

  /* @BelongsToMany(() => Skill, () => Player_Skills)
  skills?: Array<Skill & {Player_Skills: Player_Skills}>;

  @BelongsToMany(() => Trait, () => Player_Traits)
  trait?: Array<Trait & {Player_Traits: Player_Traits}>; */

   @BelongsToMany(() => Skill, () => Player_Skills)
  skills?: Skill[];

  @BelongsToMany(() => Trait, () => Player_Traits)
  traits?: Trait[];

   /* @BelongsToMany(() => Trait, () => Player_Traits)
  traits?: Trait[];     */ 
}

 /* Player.belongsToMany(Skill, { 
  through: Player_Skills,
  foreignKey: 'skillId',
  otherKey: 'playerId',
});  */

export default Player;