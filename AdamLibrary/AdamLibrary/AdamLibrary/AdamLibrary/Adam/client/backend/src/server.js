import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import loginRoute from './login.js';

const app = express();
const PORT = 5050;

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api', loginRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
