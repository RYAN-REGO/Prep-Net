import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

//Routes
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import notiRoutes from './routes/notices.js'

const app = express();
dotenv.config();

app.use(bodyParser.json({limit : "30mb", extended : true}));
app.use(bodyParser.urlencoded({limit : "30mb", extended : true}));
app.use(cors());


app.use('/posts', postRoutes);
app.use('/user', userRoutes);
app.use('/noti', notiRoutes);

const CONNECTION_URL = process.env.MONGODB_URL;
const PORT = process.env.port || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser : true, useUnifiedTopology : true} )
    .then(()=>app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
    .catch((error)=> error.message)

