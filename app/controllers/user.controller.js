const db = require("../models");
const User = db.user;
const Role = db.role;
const Schedule = db.schedule;
const Op = db.Sequelize.Op;


exports.getStaffUser = (res, req) => {
    const startDate = new Date(req.params.startDate) || new Date();
    const endDate = startDate.setFullYear(startDate.getFullYear() + 1);
    const id = req.params.id;
    User.findAll({
        where: {
            id: id
        },
        include: [{
            model: 'schedule',
            where: {
                workDate: {
                    $between: [startDate, endDate]
                }

            }
        }]

    }).then((user) => {
        return res.status(200).send({
            user
        });
    }).catch((err) => {
        res.status(500).send({ message: err.message });
    });
};

exports.updateUser = (req, res) => {
    const id = req.params.userId;
    User.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update User with id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating User with id=" + id
            });
        });
};

exports.deleteUser = (req, res) => {
    const id = req.params.userId;
    User.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete User with id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
};
