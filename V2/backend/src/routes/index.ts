import { Application } from "express";
import tutorialRoutes from "./tutorial.routes";
import homeRoutes from "./home.routes";
import playerRoutes from "./player.routes"
import skillRoutes from "./skill.routes";
import traitRoutes from "./trait.routes";
import mobRoutes from "./mob.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/api", homeRoutes);
    app.use("/api/tutorials", tutorialRoutes);
    app.use("/player", playerRoutes);
    app.use("/skill", skillRoutes);
    app.use("/trait", traitRoutes);
    app.use("/mob", mobRoutes);

  }
}
