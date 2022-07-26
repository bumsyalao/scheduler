const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller.js");
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/staff/:id/:startDate",
        [authJwt.verifyToken],
        controller.getStaffUser
    );
    app.put(
        "/api/admin/:userId",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.updateUser
    );

    app.delete(
        "/api/admin/:userId",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.deleteUser
    );
};

