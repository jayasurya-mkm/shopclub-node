import UserService from "../../services/user.service";
import Conatiner, { Inject } from 'typedi'
import * as mongoose  from "mongoose";
import { User } from "../../common/interfaces/user.interfaces";
import { Request, Response } from "express";

export default class UserMiddleware {

    static userLogin = async (req: Request, res: Response, next: Function) => {
        try {
            const userModel = Conatiner.get('userModel') as mongoose.Model<User & mongoose.Document>;
            const user = await userModel.find({email: req.body.email});
            if (!!user && user.length >= 1 && user[0].email === req.body.email && user[0].password === req.body.password) {
                res.status(200).json({id: user[0]._id, username: user[0].username, role: user[0].role});
            } else {
                res.status(200).json({message: 'Invalid Mail/Password'});
            }
        } catch (error) {
            res.status(500).json({message: 'please check param/payload key as correct or not'});
        }
        next();
    }

    constructor() {}

    // public static async userLogin() {
    //     return async (req, res, next) => {
    //         console.log('its from middleware'+ req);
    //         next();
    //     }
    // }

    // public static userMidInstance() {
    //     return new UserMiddleware();
    // }
}
