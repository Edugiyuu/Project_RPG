import { Table, Column, Model, HasMany, AllowNull, Unique, Default, DataType, BelongsToMany} from 'sequelize-typescript';
import Skill from "../models/mobSkill.model"
import Mob_Skills from '../models/mobSkill.model';


@Table
class MobModel extends Model {
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

}

export default MobModel;
