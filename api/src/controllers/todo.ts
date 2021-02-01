/* eslint-disable no-useless-catch */
import { NextFunction, Request, Response } from 'express';
import ITodo from '../interfaces/ITodo';
import TodoResolver, { ITodoResolver } from '../resolvers/todo';

const createTodoItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const todoItem: ITodo = req.body;
        if (!todoItem.title || !todoItem.description) throw new Error('invalid todo object');

        const resolver: ITodoResolver = new TodoResolver();
        const data = await resolver.createTodoItem(todoItem);
        return res.status(201).json(data);
    } catch (err) {
        throw err;
    }
};
const deleteTodoItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id = '' } = req.params;
        if (!id) throw new Error('invalid id');

        const resolver: ITodoResolver = new TodoResolver();
        const data = await resolver.deleteTodoItem(id);
        return res.status(200).json(data);
    } catch (err) {
        throw err;
    }
};

const getTodoAllList = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const resolver: ITodoResolver = new TodoResolver();
        const data = await resolver.getTodoAllList();
        return res.status(200).json(data);
    } catch (err) {
        throw err;
    }
};

const getTodoById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id = undefined } = req.params;
        if (!id) throw new Error('invalid id');

        const resolver: ITodoResolver = new TodoResolver();
        const data = await resolver.getTodoById(id);
        return res.status(200).json(data);
    } catch (err) {
        throw err;
    }
};

const updateTodoById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id = undefined } = req.params;
        const todo: ITodo = req.body;
        if (!id || !todo) throw new Error('invalid id or todo object');

        const resolver: ITodoResolver = new TodoResolver();
        const data = await resolver.updateTodoById(id, todo);
        return res.status(200).json(data);
    } catch (err) {
        throw err;
    }
};

export default { createTodoItem, deleteTodoItem, getTodoAllList, getTodoById, updateTodoById };
