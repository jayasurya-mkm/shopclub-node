import { EventSubscriber, On } from 'event-dispatch'
import { User } from '../common/interfaces/user.interfaces';

@EventSubscriber()
export class UserEventsSubsciber {
    constructor() {}

    @On('signUp')
    signUp(user: User) {
        
    }
}