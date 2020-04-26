import * as mongoose  from "mongoose";
import { User } from "../common/interfaces/user.interfaces";

export class UsersModelSchema {

    static schemaTypes = mongoose.Schema.Types;
    constructor() {}

    public static user() {
        const userSchema = new mongoose.Schema({
            username: { type: String, required: true},
            email: { type: String, lowercase: true, unique: true, index: true},
            phone_number: { type: Number},
            password: { type: String, required: true},
            confirm_password: { type: String, required: true},
            role: { type: String, default: 'pro-user'},
        }, {timestamps: true, versionKey: false });
        return userSchema;
    }
}

export default mongoose.model<User & mongoose.Document>('user', UsersModelSchema.user(), 'users');
