import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UserService {

// class variables
  users: CreateUserDTO[] = [
    {
      name: 'Rishi',
      age: 24,
      gender: 'male',
      isMarried: false,
      email : "rishi@gmail.com"
    },
    {
      name: 'Vasu',
      age: 24,
      gender: 'male',
      isMarried: false,
       email : "rishi@gmail.com"
    },
    {
      name: 'Shashi',
      age: 38,
      gender: 'female',
      isMarried: false,
       email : "rishi@gmail.com"
    },
  ];

  constructor(@Inject(forwardRef(()=> AuthService))private readonly authService : AuthService){}


  getAllUsers(gender ?:string){
    if(!this.authService.isAuthenticated){
      return 'Not_authenticated'
    }
    if(gender)
        return this.users.filter((user) => user.gender === gender)
    return this.users;
  }

  getUserById(name : string){
    return this.users.find((user) => user.name === name)
  }

  createUser(user :CreateUserDTO ){
    this.users.push(user)
  }


}
