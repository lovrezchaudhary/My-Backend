import mongoose from "mongoose";

const RecordSchema = new mongoose.Schema(
    {
        doctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Doctor",
        },
        patient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient",
        },
        record: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },

    }, {timestamps: true}
);

export const Record = mongoose.model("Record", RecordSchema);