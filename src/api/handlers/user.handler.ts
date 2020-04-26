import Container, { Inject, Service } from "typedi";
import userModel from "../../models/user.model";
import { ResponseDataUtils } from "../../common/utilities/response-data.util";
import { Request, Response } from "express";
import * as mongoose from "mongoose";
import { User } from "../../common/interfaces/user.interfaces";
import UserService from "../../services/user.service";

export class UserHandler {
    userSrv$: any;
    userModel: mongoose.Model<User & mongoose.Document>;
    constructor() {
        this.userModel = Container.get('userModel') as mongoose.Model<User & mongoose.Document>;
    }

    static loginUser() {
        return async (req: Request, res: Response, next: Function) => {
            try {
                console.log(req);
                const user = await new UserHandler().userModel.find({ email: req.body.email });
                const respData = {
                    id: user[0]._id,
                    username: user[0].username,
                    role: user[0].role
                };
                if (!!user && user.length >= 1 && user[0].email === req.body.email && user[0].password === req.body.password) {
                    res.status(200).json(ResponseDataUtils.successResponse(respData, 200, "Fetch user successfully"));
                } else {
                    res.status(200).json({message: 'Invalid Mail/Password'});
                }
            } catch (error) {
                res.status(500).json(ResponseDataUtils.faildResponse(500, error));
            }
            next();
        }
    }

    static signUp() {
        return async (req: Request, res: Response, next: Function) => {
            const addUser = new userModel({
                // username: req.body.username,
                // email: req.body.email,
                // phone_number: req.body.phone_number,
                // password: req.body.password,
                // confirm_password: req.body.confirm_password
                ...req.body
            });
            addUser.save((error, user) => {
                if (error) return res.status(500).json(res.status(500).json(ResponseDataUtils.faildResponse(500, error)));
                res.status(201).json(ResponseDataUtils.successResponse(addUser, 201, 'user sign-up successfully'));
            });
        }
    }

    static dumny() {
        return async () => {
            const userSr = Container.get(UserService)
            const data = await userSr.getLogin();
        }
    }
}
