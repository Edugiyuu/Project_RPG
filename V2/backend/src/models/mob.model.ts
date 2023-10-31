import { Table, Column, Model, HasMany, AllowNull, Unique, Default, DataType, BelongsToMany, PrimaryKey} from 'sequelize-typescript';
import Skill from "../models/mobSkill.model"
import Mob_Skills from '../models/mobSkill.model';


@Table
class Mob extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
  })
  mobId: number;


    @Column({
        type: DataType.STRING(255)
      })
      name?: string;

      @Column({
        type: DataType.INTEGER
      })
      hp?: number;

      @Column({
        type: DataType.INTEGER
      })
      attack?: number;
      
  /* @BelongsToMany(() => Skill, () => Mob_Skills)
  skills: Skill[]  */
  
    @BelongsToMany(() => Skill, () => Mob_Skills, "skillId", "mobId") //o erro tá aqui
  skills?: Skill[];  

}

export default Mob;
