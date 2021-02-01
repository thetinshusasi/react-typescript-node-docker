import mongoose, { Schema } from 'mongoose';
import Status from '../enums/Status';
import logging from '../config/logging';
import ITodo from '../interfaces/ITodo';

const TodoSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        status: { type: Status, required: true }
    },
    {
        timestamps: true
    }
);

TodoSchema.post<ITodo>('save', function () {
    logging.info('Mongo', 'todoItem saved: ', this);
});

export default mongoose.model<ITodo>('Todo', TodoSchema);
