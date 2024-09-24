import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
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
    }
}, {timestamps: true}
);

export const Todo = mongoose.model("Todo", TodoSchema);