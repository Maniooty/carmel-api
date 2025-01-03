import mongoose from "mongoose"


const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://manigandsiet10:DhlhXZkeXuAKuyQs@carmel-api.6zpzy.mongodb.net/?retryWrites=true&w=majority&appName=Carmel-api')
        console.log('MongoDB connected');

    } catch (e) {
        console.log(e);
    }
}

export default connectDB
