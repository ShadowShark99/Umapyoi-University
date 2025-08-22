const {Router} = require("express");
const enrollController = require("../controllers/enrollController");
const enrollRouter = Router();

enrollRouter.get("/", enrollController.formGet);
enrollRouter.post("/", enrollController.umaPost);

module.exports = enrollRouter;
