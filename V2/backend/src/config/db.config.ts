export const config = {
  HOST: "localhost",
  USER: "admin",
  PASSWORD: "password123",
  DB: "node_sequelize",
  PORT: 6500,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

export const dialect = "postgres";
