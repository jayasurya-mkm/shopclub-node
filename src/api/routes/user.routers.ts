import * as express from 'express';
import UserModel from '../../models/user.model';
import UserService from '../../services/user.service';
import UserMiddleware from '../middlewares/user.middleware';
import { ResponseDataUtils } from '../../common/utilities/response-data.util';
import { UserHandler } from '../handlers/user.handler';
import Container from 'typedi';
export class UserRouters {

    router: express.Router;
    constructor(
    ) {
        this.router = express.Router();
        this.getUserDetails();
        this.singUpUser();
        this.loginUser();
    }

    public async getUserDetails() {
        return await this.router.get('/user', UserHandler.dumny());
    }

    public async singUpUser() {
        return await this.router.post('/signup', UserHandler.signUp());
    }

    public async loginUser() {
        return await this.router.post('/signin', UserHandler.loginUser());
    }

    public static routerInstance() {
        return new UserRouters().router;
    }

}

export default UserRouters.routerInstance();
