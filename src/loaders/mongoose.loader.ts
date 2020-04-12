import * as mongoose from 'mongoose';
import { Db } from 'mongodb';
import config from '../config/app.config';

export default async (): Promise<Db> => {
    try {
        // const URL = 'mongodb+srv://shop-club:shop-club@shopclub-db-acy1x.gcp.mongodb.net/test?retryWrites=true&w=majority';
        const mongooseConnectionInstance = await mongoose.connect( config.db.MONGODB_URI , {
            keepAlive: true,
            keepAliveInitialDelay: 300000,
            socketTimeoutMS: 2000000,
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        
        // .then( () => {
        //     console.log('✌️ DB loaded and connected Successfully!');
        // }).catch((error) => {
        //     console.log('DB connection Error '+ error)
        // })
        // const db = mongooseConnectionInstance.connection;
        // db.on('error', () => console.log('DB connection error'));
        // db.once('open', () => console.log('DB connected Successfully'));
        return mongooseConnectionInstance.connection.db;
    } catch (error) {
        console.error(error);
    }
}