module.exports = {
  client: "pg",
  connection: {
    host: process.env.DB_HOST || "localhost",
    user: "postgres",
    password: "postgres",
    database: "db"
  }
};
