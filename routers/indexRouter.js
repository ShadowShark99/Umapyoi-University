const {Router} = require("express");
const indexController = require("../controllers/indexController");
const indexRouter = Router();

indexRouter.get("/", indexController.getHome);
indexRouter.post("/expand", indexController.expand);

module.exports = indexRouter;