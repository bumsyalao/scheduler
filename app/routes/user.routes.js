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
    app.get("/user/all", controller.allAccess);
    app.get(
        "/user/staff",
        [authJwt.verifyToken],
        controller.staffUser
    );
    app.get(
        "/user/admin",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.adminUser
    );
};

