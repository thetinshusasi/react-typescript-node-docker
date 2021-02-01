import express, { Router } from 'express';
import controller from '../controllers/todo';

const router: Router = express.Router();

router.get('/', controller.getTodoAllList);
router.get('/:id', controller.getTodoById);
router.post('/', controller.createTodoItem);
router.put('/:id', controller.updateTodoById);
router.delete('/:id', controller.deleteTodoItem);

export = router;
