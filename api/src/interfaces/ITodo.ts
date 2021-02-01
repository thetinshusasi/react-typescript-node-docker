import Status from '../enums/Status';
import { Document } from 'mongoose';

interface ITodo extends Document {
    title: string;
    description: string;
    status?: Status;
}

export default ITodo;
