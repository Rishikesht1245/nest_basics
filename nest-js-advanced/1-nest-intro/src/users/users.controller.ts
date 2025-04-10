import { Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './users.service';

// we can mention the url enpoint here
@Controller('users')
export class UserController {
  userService = new UserService();

  @Get()
  getUsers() {
    return this.userService.getAllUsers();
  }

  // id is mandatory, rest are optional
  @Get(':id/:name{/:gender}')
  getUserById(@Param('id') id : any){
    // the value we read from route params will be string
    return this.userService.getUserById(+id);
  }

  @Post()
  createUser() {
    // business logic present in the service class
    this.userService.createUser({
      id: 4,
      name: 'Ramu',
      age: 38,
      gender: 'male',
      isMarried: false,
    });

    return 'a new user has been created';
  }
}
