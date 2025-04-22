import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UserService {

// class variables


  getAllUsers(gender ?:string){
    
  }

  getUserById(name : string){
  }

  createUser(user :CreateUserDTO ){
  }


}
