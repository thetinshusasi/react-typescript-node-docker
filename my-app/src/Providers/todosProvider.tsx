import { type } from "os";
import React, { useEffect, useState, useContext } from "react";
import IToDoItem from "../models/interfaces/todoItem";
import {
  addTodoItem,
  deleteTodosById,
  getTodos,
  updateTodosById,
} from "../service/todoService";
export interface TodosProviderProps {
  children: React.ReactNode;
}
export interface TodosProviderState {
  loading: boolean;
  error: string;
  todos: IToDoItem[] | undefined;
  getTodoList: () => Promise<any>;
  createTodoItem: (todo: IToDoItem) => Promise<any>;
  updateTodoItem: (id: string, todo: IToDoItem) => Promise<any>;
  deleteTodoItem: (id: string) => Promise<any>;
}

export type TodosProviderType = {
  loading?: boolean;
  error?: string;
  todos?: IToDoItem[] | undefined;
  getTodoList?: () => Promise<any>;
  createTodoItem?: (todo: IToDoItem) => Promise<any>;
  updateTodoItem?: (id: string, todo: IToDoItem) => Promise<any>;
  deleteTodoItem?: (id: string) => Promise<any>;
};
export const TodosContext = React.createContext<TodosProviderType>({});

const TodosProvider = ({ children }: TodosProviderProps) => {
  const getTodoList = async () => {
    try {
      setValue({
        ...providerState,
        loading: true,
      });
      const data: IToDoItem[] = await getTodos();
      setValue({
        ...providerState,
        todos: data,
        loading: false,
      });
    } catch (err) {
      setValue({
        ...providerState,
        todos: undefined,
        loading: false,
        error: "Error in Fetching To Do List",
      });
    }
  };
  const createTodoItem = async (todo: IToDoItem) => {
    await addTodoItem(todo);
    await getTodoList();
  };
  const deleteTodoItem = async (id: string) => {
    await deleteTodosById(id);
    await getTodoList();
  };

  const updateTodoItem = async (id: string, todo: IToDoItem) => {
    await updateTodosById(id, todo);
    await getTodoList();
  };

  const providerState: TodosProviderState = {
    loading: false,
    error: "",
    todos: undefined,
    getTodoList,
    createTodoItem,
    updateTodoItem,
    deleteTodoItem,
  };

  const [value, setValue] = useState(providerState);

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};

export default TodosProvider;
