import 'dotenv/config';
import express from 'express';
import { startServer } from './utils/serverStarter';

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Health check endpoint
app.get('/api', (req, res) => {
    res.json({ message: 'Server is healthy' });
});

startServer(app, PORT);
