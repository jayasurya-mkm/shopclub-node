import * as express from 'express';
import UserModel from '../../models/user.model';
import Container from 'typedi';
import UserService from '../../services/user.service';
import UserMiddleware from '../middlewares/user.middleware';
import * as userLogin from '../middlewares/user.middleware';

export class UserRouters {

    router: express.Router;
    // userMiddleware: any;
    constructor() {
        this.router = express.Router();
        // this.userMiddleware = new UserMiddleware();
        this.getUserDetails();
        this.singUpUser();
        this.loginUser();
    }

    public async getUserDetails() {
        return await this.router.get('/', async (req, res) => {
            try {
                const data = await UserModel.find();
                const user = await Container.get(UserService);
                await user.SignUp(data);
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({ message: error});
            }
        });
    }

    public async singUpUser() {
        return await this.router.post('/signup', async (req, res) => {
            const addUser = new UserModel({  
                name: req.body.name,
                email: req.body.email,
                password: req.body.password          
            });
            // addUser.save((error, user) => {
            //     if (error) return res.status(500).json({message: error});
            //     res.status(201).json(user);
            // });
        });
    }

    public async loginUser() {
        return await this.router.post('/login', UserMiddleware.userLogin, (req, res) => {
            // res.json()
        });
    }

    public static routerInstance() {
        return new UserRouters().router;
    }

}

export default UserRouters.routerInstance();