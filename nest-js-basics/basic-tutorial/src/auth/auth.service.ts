import { Injectable } from '@nestjs/common';
import { Users } from './interfaces';

@Injectable()
export class AuthService {
    private readonly users : Users[] = [];

    createUser(user: Users){
        this.users.push(user);
        return "user creation successfull"
    }

    loginUser(username : string): Users {
        const user=  this.users?.find((user) => user.username == username.toString())
        return user;
    }
}
