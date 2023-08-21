const controller = require("../Controllers/todoController.cjs");
const { Router } = require("express");
const router = Router();
var cors = require("cors");

router.get("/todo/show", controller.showToDo);
router.post("/todo/create", controller.createToDo);
router.put("/todo/update/:id", controller.updateToDo);
router.delete("/todo/delete/:id", controller.deleteToDo);

module.exports = router;
