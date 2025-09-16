const {Router} = require("express");
const indexController = require("../controllers/indexController");
const indexRouter = Router();

indexRouter.get("/", indexController.getHome);
indexRouter.post("/delete", indexController.delete);
indexRouter.post("/searchByTrainer", indexController.searchByTrainer);

module.exports = indexRouter;