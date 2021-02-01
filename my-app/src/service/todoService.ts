import service from "./baseService";
import IToDoItem from "../models/interfaces/todoItem";
export const getTodos = (): Promise<any> => {
  return service.get("todo/");
};
export const getTodosById = (id: string): Promise<any> => {
  return service.get(`todo/${id}`);
};

export const addTodoItem = (todo: IToDoItem): Promise<any> => {
  return service.post(`todo/`, todo);
};
export const updateTodosById = (id: string, todo: IToDoItem): Promise<any> => {
  return service.put(`todo/${id}`, todo);
};
export const deleteTodosById = (id: string): Promise<any> => {
  return service.del(`todo/${id}`);
};
