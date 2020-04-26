import * as express from 'express';
import loader from './loaders';

export class AppServer {
    constructor() {}

    public static async runApp() {
        const app = express();
        const loaderModules = await loader({ expressApp: app});
        const PORT = 9000;
        app.listen(PORT, () => console.log('Server running on '+PORT));
    }
}

AppServer.runApp();
