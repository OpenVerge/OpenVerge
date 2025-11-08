import { Application } from 'express';
import { connectDB } from '../config/database';

export const startServer = async (app: Application, port: number): Promise<void> => {
    try {
        // Connect to MongoDB before starting the server
        await connectDB();
        app.listen(port, () => {
            console.log(`Database connected. Server running on port ${port}`);
        });
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
        process.exit(1);
    }
};
