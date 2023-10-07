import { sequelize, DataTypes } from "../database/db";
import { Table, Column, Model, HasMany, AllowNull, Unique, Default, DataType, BelongsToMany} from 'sequelize-typescript';


@Table
class Skill extends Model {
  @Column
  name: string;

  @Column
  damage: number;

  @Column
  heal: number;

  @Column
  stun: boolean;

  @Column
  stamina: number;

  @Column
  mobSkill: boolean;
}

/* const Skill = sequelize.define("skills", {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  damage: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  heal: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  stun: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  stamina: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  mobSkill: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
  
}) */;
/* damage,
      heal,
      stun,
      stamina, */
export default Skill;
