import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

// class variables
  users: { id : number, name: string; age: number; gender: string; isMarried: boolean }[] = [
    {
        id : 1,
      name: 'Rishi',
      age: 24,
      gender: 'male',
      isMarried: false,
    },
    {
        id : 2,
      name: 'Vasu',
      age: 24,
      gender: 'male',
      isMarried: false,
    },
    {
        id : 3,
      name: 'Shashi',
      age: 38,
      gender: 'male',
      isMarried: false,
    },
  ];


  getAllUsers(){
    return this.users;
  }

  getUserById(id : number){
    return this.users.find((user) => user.id === id)
  }

  createUser(user :{ id : number, name: string; age: number; gender: string; isMarried: boolean } ){
    this.users.push(user)
  }


}
