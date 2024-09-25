import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        salary: {
            type: String,
            required: true,
        },
        qualification: {
            type: String,
            required: true,
        },
        experienceInYears: {
            type: Number,
            default: 0
        },
        worksInHospitals: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital",
        },
        specialization: {
            type: String,
            required: true,
        },
    }, {timestamps: true}
);

export const Doctor = mongoose.model("Doctor", DoctorSchema);