const { authJwt } = require("../middleware");
const controller = require("../controllers/schedule.controller.js");
module.exports = function (app) {
    app.post(
        "/api/admin/schedule/:userId",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.createSchedule
    );
};
