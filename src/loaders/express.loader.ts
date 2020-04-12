import * as express from 'express';
import * as bodyParser from 'body-parser';
import UserRouters from '../api/routes/user.routers';

export class ExpressLoader {
    constructor(
        private app: express.Application
    ) {}

    public static async load(app: express.Application) {
        const expressLoader = new ExpressLoader(app);
        expressLoader.config();
        return expressLoader.app;
    }

    private config() {
        this.setSecurityConfig();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use('/', UserRouters);
    }

    private setSecurityConfig() {

        this.app.use( (req, res, next) => {
            res.header('Access-Control-Allow-Origin', 'localhost:4200');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
            res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin, x-access-token, X-Requested-With, Content-Type, Accept, Cache-Control, Authorization, WWW-Authenticate');
            res.header('Access-Control-Expose-Headers', 'WWW-Authenticate, x-access-token');
            return next();
        });
    }
}

export default ExpressLoader;