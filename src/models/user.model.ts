import * as mongoose  from "mongoose";
import { User } from "../common/interfaces/user.interfaces";

export class UsersModelSchema {

    schema: mongoose.Schema<any>
    constructor() {}

    public static user() {
        const userSchema = new mongoose.Schema({
            name: { type: String, required: true},
            email: { type: String, lowercase: true, unique: true, index: true},
            password: { type: String, required: true},
            role: { type: String, default: 'user'},
        }, {timestamps: true, versionKey: false });
        return userSchema;
    }
}

export default mongoose.model<User & mongoose.Document>('user', UsersModelSchema.user(), 'users');