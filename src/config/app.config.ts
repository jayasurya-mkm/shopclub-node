import * as dotenv from 'dotenv';


process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if(!envFound) {
    throw new Error("⚠️ Sorry couldn't find .env file  ⚠️");
}

export default {
  /**
   * Your favorite port
   */
  port: parseInt(process.env.PORT, 10),

  /**
   * That long string from mlab
   */
  databaseURL: process.env.LOCAL_MONGODB_URI,

  /**
   * Your secret sauce
   */
  jwtSecret: process.env.JWT_SECRET,

  db: {
      MONGODB_URI: 'mongodb://127.0.0.1:27017/shopclub'
  },

  logs: {
    level: 'silly'
  }
    
}