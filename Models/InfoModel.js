import mongoose from "mongoose";

const InfoSchema = mongoose.Schema(
    {
        date: { type: Date, require: true },
        day: { type: String, require: true },
        night: { type: String, require: true }
    },
    {
        timestamps: true
    }
)

const Info = mongoose.model("Info", InfoSchema);

export default Info;