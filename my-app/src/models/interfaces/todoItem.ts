import { Status } from "../enums/status";

export default interface IToDoItem {
  _id?: string;
  title?: string;
  description?: string;
  status?: Status;
}
