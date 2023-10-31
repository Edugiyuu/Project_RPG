import { Sequelize } from "sequelize-typescript";
import { config, dialect } from "../../config/db.config";
import Tutorial from "../models/tutorial.model";
import Player from "../models/player.model";
import Trait from "../models/trait.model";
import Skill from "../models/skill.model";
import Mob from "../models/mob.model";
import Player_Skills from "../models/playerSkill.model";
import Player_Traits from "../models/playerTrait.model";
import Mob_Skills from "../models/mobSkill.model";

class Database {
  public sequelize: Sequelize | undefined;

  constructor() {
    this.connectToDatabase();
  }

  private async connectToDatabase() {
    this.sequelize = new Sequelize({
      database: config.DB,
      username: config.USER,
      password: config.PASSWORD,
      host: config.HOST,
      port: config.PORT,
      dialect: dialect,
      pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle,
      },
      models: [Tutorial,Player,Trait,Skill,Mob,Player_Skills,Player_Traits,Mob_Skills],
    });

    await this.sequelize
      .authenticate()
      .then(() => {
        console.log("Connection has been established successfully.");
      })
      .catch((err) => {
        console.error("Unable to connect to the Database:", err);
      });
  }
}

export default Database;
