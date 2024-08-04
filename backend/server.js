import express from 'express';
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js'
dotenv.config();
const port = process.env.PORT || 5000;

connectDB(); //Connect to MongoDB

const app = express();

app.get('/',(req,res)=>{
    res.send('API is running')
})

app.use('/api/products',productRoutes);

app.use(notFound)
app.use(errorHandler)


app.listen(port,()=>console.log(`server running on port ${port}`))