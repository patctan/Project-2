const User = require('./User');
const Planner = require('./Planner');

User.hasMany(Planner, {
    foreignKey:'user_id',
    onDelete: 'CASCADE'
});

Planner.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {User, Planner};