import ITodo from '../interfaces/ITodo';
import mongoose from 'mongoose';
import Todo from '../models/todo';
import Status from '../enums/Status';

export interface ITodoResolver {
    getTodoAllList: () => Promise<ITodo[]>;
    getTodoById: (id: string) => Promise<ITodo | null>;
    updateTodoById: (id: string, todo: ITodo) => Promise<ITodo | null>;

    createTodoItem: (todo: ITodo) => Promise<ITodo>;
    deleteTodoItem: (id: string) => Promise<ITodo | null>;
}
export default class TodoResolver implements ITodoResolver {
    createTodoItem = async (data: ITodo): Promise<ITodo> => {
        const todo = new Todo({
            _id: new mongoose.Types.ObjectId(),
            status: Status.PENDING,
            ...data
        });

        return todo
            .save()
            .then((res) => res)
            .catch((error) => {
                throw new Error(error.message);
            });
    };

    deleteTodoItem = async (id: string): Promise<ITodo | null> => {
        return Todo.findByIdAndDelete(id)
            .then((res) => res)
            .catch((error) => {
                throw new Error(error.message);
            });
    };
    getTodoAllList = async (): Promise<ITodo[]> => {
        return Todo.find()
            .exec()
            .then((res) => res)
            .catch((error) => {
                throw new Error(error.message);
            });
    };

    getTodoById = async (id: string): Promise<ITodo | null> => {
        return Todo.findById(id)
            .exec()
            .then((res) => res)
            .catch((error) => {
                throw new Error(error.message);
            });
    };

    updateTodoById = async (id: string, todo: ITodo): Promise<ITodo | null> => {
        return Todo.findByIdAndUpdate(id, { ...todo }, { new: true })
            .exec()
            .then((res) => res)
            .catch((error) => {
                throw new Error(error.message);
            });
    };
}
