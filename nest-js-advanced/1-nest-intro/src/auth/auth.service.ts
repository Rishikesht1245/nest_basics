import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(@Inject(forwardRef(() => UserService)) private readonly userService : UserService){}

    isAuthenticated : boolean =  false;

    login(username: string){
        // const user = this.userService.users.find((u => u.name === username))
        // if(user){
        //     this.isAuthenticated = true;
        //     return 'User_token'
        // }
        return 'NOT_AUTHENTICATED'

    }
}
