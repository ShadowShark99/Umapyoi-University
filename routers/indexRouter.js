const {Router} = require("express");
const indexController = require("../controllers/indexController");
const indexRouter = Router();

indexRouter.get("/", indexController.getHome);
indexRouter.post("/expand", indexController.expand);
indexRouter.post("/delete", indexController.delete);
indexRouter.post("/searchByTrainer", indexController.searchByTrainer);
indexRouter.post("/train", indexController.train);

module.exports = indexRouter;