import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('MONGODB_URI environment variable is required');
}

export const connectDB = async (): Promise<void> => {
    await mongoose.connect(MONGODB_URI);
};
