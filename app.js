import express from 'express';
import dotenv from 'dotenv';
import assistantRoutes from './routes/assistant.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/assistant', assistantRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});
