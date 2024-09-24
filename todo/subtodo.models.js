import mongoose from "mongoose";

const SubTodoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    createdBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    todoId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Todo",
    }
});

export const SubTodo = mongoose.model("SubTodo", SubTodoSchema);