import Container, { Service, Inject } from "typedi";
import { EventDispatcher } from "event-dispatch";
import { Model, Document } from "mongoose";
import { User } from "../common/interfaces/user.interfaces";
import { UsersModelSchema } from "../models/user.model";

@Service()
export default class UserService {

    // public eventDispatcher = new EventDispatcher();
    constructor(
        @Inject('userModel') private userModel : any,
        ) {
    }

    // public async SignUp(data: any) {
    //     this.eventDispatcher.dispatch('signUp', data);
    // }

    async getLogin() {
        console.log(this.userModel);
        try {
            return await this.userModel.find().exect().then(res => {
                console.log(res);
            })
        } catch(error) {
            console.log(error);
        }
    }

}

namespace Models {
    export type UserModel = Model<User & Document>;
  }
