const todoModel = require("../model/todoSchema.js");

exports.showToDo = async (req, res) => {
  try {
    const showToDo = await todoModel.find();
    return res.json({ message: "showing all Data", todo: showToDo });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

exports.deleteToDo = async (req, res) => {
  try {
    const deleteToDo = await todoModel.findByIdAndDelete(req.params.id);
    return res.json({ message: "TODO has been Deleted" });
  } catch(error) {
    return res.status(400).json({ message: error });
  }
};

exports.updateToDo = async (req, res) => {
  try {
    const updateToDo = await todoModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    return res.json({ message: "TODO has been updated" });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

exports.createToDo = async (req, res) => {
  try {
    const createToDo = await todoModel.create(req.body);
    return res.json({ message: "TODO is Created" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
};
