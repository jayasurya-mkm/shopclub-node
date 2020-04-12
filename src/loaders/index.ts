import MongoDBLoader from './mongoose.loader';
import ExpressLoader from './express.loader';
import * as express from 'express';
import UserModelSchema from '../models/user.model';
import dependencyInjector from './dependencyInjector';
import './events.loader';

export async function loaderModule(moduleInstance: { expressApp: express.Application }) {

    const mongoConnection = await MongoDBLoader();
    console.log('✌️ DB loaded and connected! ✌️');
    
    const userModel = { name: 'userModel', model: UserModelSchema}

    dependencyInjector({
        mongoConnection,
        models: [
            userModel
        ]
    });
    console.log('✌️ Dependency Injector loaded ✌️')
    const app = await ExpressLoader.load(moduleInstance.expressApp);
    console.log('✌️ Express loaded ✌️');

    return {app};
}

export default loaderModule;