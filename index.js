import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import loginRoutes from './routes/loginRoutes.js';


config();
const app = express();
const PORT = process.env.PORT || 3037;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', loginRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
