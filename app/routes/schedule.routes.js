const { authJwt } = require("../middleware");
const controller = require("../controllers/schedule.controller.js");
module.exports = function (app) {
    app.post(
        "/api/admin/schedule/:userId",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.createSchedule
    );
    app.put(
        "/api/admin/schedule/:id",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.updateSchedule
    );
    app.delete(
        "/api/admin/schedule/:id",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.deleteScheule
    );
};

