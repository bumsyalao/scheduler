const db = require("../models");
const User = db.user;
const Role = db.role;
const Schedule = db.schedule;
const Op = db.Sequelize.Op;
exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};
exports.staffUser = (req, res) => {
    //api to get schedule by userid and workdate range
    // const userSchedule = user.findByPk(tutorialId, { include: ["comments"] })
    //     .then((tutorial) => {
    //         return tutorial;
    //     })
    //     .catch((err) => {
    //         console.log(">> Error while finding tutorial: ", err);
    //     });

    // res.status(200).send({

    // });
};
exports.adminUser = (req, res) => {
    //
    res.status(200).send("Admin Content.");
};

