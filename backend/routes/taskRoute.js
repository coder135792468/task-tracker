import express from 'express';
import {
	getAllTasks,
	addnewTask,
	updateTask,
	deleteTask,
	getTaskById,
} from '../controller/taskController.js';
const router = express.Router();

router.route('/').get(getAllTasks).post(addnewTask);
router.route('/:id').get(getTaskById).put(updateTask).delete(deleteTask);

export default router;
