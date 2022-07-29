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
    app.get("/api/users", controller.allAccess);
    // app.get(
    //     "/api/staff",
    //     [authJwt.verifyToken],
    //     controller.staffUser
    // );
    // app.get(
    //     "/api/admin",
    //     [authJwt.verifyToken, authJwt.isAdmin],
    //     controller.adminUser
    // );

};

