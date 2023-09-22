module.exports = {
  dialect: "postgres",
  host: "localhost",
  port: 5435,
  username: "postgres",
  password: "barber",
  database: "app_barber",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
