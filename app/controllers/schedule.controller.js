const db = require("../models");
const Schedule = db.schedule;
const Op = db.Sequelize.Op;

exports.createSchedule = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const schedule = new Schedule({
        workDate: req.body.workDate,
        shift: req.body.shift,
        userId: req.params.userId
    });
    Schedule.create(schedule, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || 'Error creating schedule'
            });
        else res.status(201).send({
            message: `User: ${schedule.userId} Schedule was created succesfully!`,
            userSchedule: data
        });
    });



}

exports.updateSchedule = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    Schedule.findOne({ where: { userId: req.params.userId } }).then((schedule) => {
        if (!schedule) {
            return res.status(404).send({ message: 'Schedule not found' })
        }
        else {
            Schedule.update({
                workDate: req.body.workDate,
                shift: req.body.shift,
                userId: req.params.userId
            }, {
                where: { id: req.params.id },
            }).then((schedule => {
                return res.status(200).send({
                    message: `User: ${schedule.userId} Schedule was updated succesfully!`,
                    userSchedule: schedule
                });
            })).catch((err) => {
                return res.status(500).send({ message: 'Error updating schedule' });
            });
        }
    })

}

exports.deleteScheule = (req, res) => {
    Schedule.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: 'Schedule not found'
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Schedule with id " + req.params.scheduleId
                });
            }
        } else res.send({ message: `Schedule was deleted successfully!` });
    });
};
