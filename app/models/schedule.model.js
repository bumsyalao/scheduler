module.exports = (sequelize, Sequelize) => {
    const Schedule = sequelize.define("schedule", {
        workDate: {
            type: Sequelize.DATE
        },
        shift: {
            type: Sequelize.INTEGER
        },

    });
    return Schedule;
};