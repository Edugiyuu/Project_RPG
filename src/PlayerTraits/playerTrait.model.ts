
import { sequelize, DataTypes } from "../database/db";



const Player_Traits = sequelize.define(
  "player_traits",
  {},
  { timestamps: false }
);

export default Player_Traits;
