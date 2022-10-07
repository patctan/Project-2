const User = require("./user");
const Planner = require("./planner");

User.hasMany(Planner, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Planner.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Planner };
