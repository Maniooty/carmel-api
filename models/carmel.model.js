import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    batch: { type: String, required: true },
    year: { type: String, required: true },
    final_Year: { type: String },
    mobile: { type: String, required: true },
    alternate_number: { type: String },
    current_position: { type: String },
    address: { type: String },
    brief_yourself: { type: String },
});

const User = mongoose.model('userlist', userSchema);

export default User;
