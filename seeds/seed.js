const sequalize = require("../config/connection");
const { User, Planner } = require("../models");

const userData = require("./userData.json");
const plannerData = require("./plannerData.json");

const seedDatabase = async () => {
  await sequalize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const planner of plannerData) {
    await Planner.create({
      ...planner,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
};

seedDatabase();
