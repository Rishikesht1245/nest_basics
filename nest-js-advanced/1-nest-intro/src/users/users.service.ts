import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

// class variables
  users: { id : number, name: string; age: number; gender: string; isMarried: boolean,email : string }[] = [
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


  getAllUsers(gender ?:string){
    if(gender)
        return this.users.filter((user) => user.gender === gender)
    return this.users;
  }

  getUserById(id : number){
    return this.users.find((user) => user.id === id)
  }

  createUser(user :{ id : number, name: string; age: number; gender: string; isMarried: boolean, email : string } ){
    this.users.push(user)
  }


}
