import { Service, Inject } from "typedi";
import { EventDispatcher } from "event-dispatch";

@Service()
export default class UserService {

    public eventDispatcher = new EventDispatcher();
    constructor(
        @Inject('userModel') private userModel: any
    ) {}

    public async SignUp(data: any) {
        this.eventDispatcher.dispatch('signUp', data);
    }

}