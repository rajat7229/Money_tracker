import express from 'express';
import dotenv from 'dotenv';
import passport from 'passport';
import session from "express-session";
import privateRouteConfig from "./config/route.config"

import ConnectDB from "./database/connection";

import Auth from "./api/auth";
import User from "./api/user";

dotenv.config();
const money = express();

privateRouteConfig(passport);

money.use(express.json());
money.use(session({secret: "MoneyTracker"}));
money.use(passport.initialize());
money.use(passport.session());

money.get('/',(req,res)=>{
    res.json({
        message: 'Server is running!!'
    });
});

money.use("/auth", Auth);
money.use("/user", User);

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