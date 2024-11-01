import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect("TYPE_YOUR_DATABASE_LINK_HERE")
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
        process.exit(1);
    }
};

export default connectDB;
