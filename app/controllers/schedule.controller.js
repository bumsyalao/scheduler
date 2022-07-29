const db = require("../models");
const Schedule = db.schedule;
const Op = db.Sequelize.Op;

exports.createSchedule = (req, res) => {
    Schedule.findOne({
        where: { userId: req.params.userId, workDate: req.body.workDate, shift: req.body.shift }
    }).then(schedule => {
        if (schedule) {
            return res.status(400).send({ message: "Schedule has already been created" });
        }
        else {
            Schedule.create({
                workDate: req.body.workDate,
                shift: req.body.shift,
                userId: req.params.userId
            }).then((schedule => {
                return res.status(200).send({
                    message: `User: ${schedule.userId} Schedule was created succesfully!`,
                    userSchedule: schedule
                });
            })).catch((err) => {
                return res.status(401).send({ message: 'Error creating schedule' });
            })
        }
    })

}
