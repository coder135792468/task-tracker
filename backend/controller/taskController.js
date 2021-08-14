import Task from "../models/Task.js";
import asyncHandler from "express-async-handler";

//@desc fetch all Tasks
//@route GET/api/task
//@acess public
const getAllTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({});
  res.json(tasks);
});

//@desc fetch task by id
//@route GET/api/task/:id
//@acess public
const getTaskById = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (task) {
    res.json(task);
  } else {
    res.json({ error: "Task not found" });
  }
});

//@desc add a task
//@route POST /api/tasks/
//@access public
const addnewTask = asyncHandler(async (req, res) => {
  const task = new Task();
  task.name = req.body.name || "untitled";
  task.description = req.body.description || "Sample description";
  if (req.body.date) {
    task.date = req.body.date;
  }
  const createdTask = await task.save();
  res.status(201).json(createdTask);
});


//update task
const updateTask = asyncHandler(async (req, res) => {
  const { name, description, checked, date } = req.body;
  const task = await Task.findById(req.params.id);
  if (task) {
    task.name = name;
    task.description = description;
    task.checked = checked || false;
    task.date = date || Date.now();
    await task.save();
    res.json(task);
  } else {
    return res.status(404).json("Task not found");
  }
});

//delete task
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  await task.remove();
});

export { getAllTasks, getTaskById, updateTask, deleteTask, addnewTask };
 
