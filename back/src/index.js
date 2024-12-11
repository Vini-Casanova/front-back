import cors from 'cors';
import express from 'express';
import AppRouter from './Router/AppRouter.js';
import LogMiddleware from './middlewares/LogMiddleware.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(LogMiddleware);

app.use('/api', AppRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
