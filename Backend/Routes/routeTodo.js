const controller = require("../Controllers/todoController.js");
const { Router } = require("express");
const router = Router();
var cors = require("cors");

router.get("/todo/show", cors(), controller.showToDo);
router.post("/todo/create", cors(), controller.createToDo);
router.put("/todo/update/:id", cors(), controller.updateToDo);
router.delete("/todo/delete/:id", cors(), controller.deleteToDo);

module.exports = router;
