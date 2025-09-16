const {Router} = require("express");
const expandController = require("../controllers/expandController");
const expandRouter = Router();

expandRouter.post("/", expandController.expand);
expandRouter.post("/train", expandController.train);

module.exports = expandRouter;