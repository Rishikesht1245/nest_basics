import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UserService {

// class variables
  users: CreateUserDTO[] = [
    {
        id : 1,
      name: 'Rishi',
      age: 24,
      gender: 'male',
      isMarried: false,
      email : "rishi@gmail.com"
    },
    {
        id : 2,
      name: 'Vasu',
      age: 24,
      gender: 'male',
      isMarried: false,
       email : "rishi@gmail.com"
    },
    {
        id : 3,
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

  getUserById(id : number){
    return this.users.find((user) => user.id === id)
  }

  createUser(user :CreateUserDTO ){
    this.users.push(user)
  }


}
