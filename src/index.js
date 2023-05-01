import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});

import productsRoutes from './routes/products.js';

app.use('/api', productsRoutes);

const PORT = process.env.PORT || 8000;
const DB_URI = process.env.DB_URI;
mongoose
  .connect(DB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(error.name));
