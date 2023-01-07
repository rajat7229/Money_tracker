import express from 'express';
import dotenv from 'dotenv';

import ConnectDB from "./database/connection";

import Auth from "./api/auth";

dotenv.config();
const money =express();
money.use(express.json());

money.get('/',(req,res)=>{
    res.json({
        message: 'Server is running!!'
    });
});

money.use("/auth", Auth);

const PORT = 4000;
money.listen(PORT, () => {
    ConnectDB()
    .then(() => {
        console.log('Server is running');
    })
    .catch((error) => {
        console.log('Server is running, but database not connected');
        console.log(error);
    });
});