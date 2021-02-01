import { Status } from "../models/enums/status";
import IToDoItem from "../models/interfaces/todoItem";

export const getPendingTasks = (tasks: IToDoItem[] | undefined) => {
  if (!tasks || !tasks.length) return [];
  return tasks.filter((task) => task.status === Status.PENDING);
};

export const getDoneTasks = (tasks: IToDoItem[] | undefined) => {
  if (!tasks || !tasks.length) return [];
  return tasks.filter((task) => task.status === Status.DONE);
};
