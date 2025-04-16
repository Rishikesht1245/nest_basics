import {
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './users.service';

// we can mention the url enpoint here
@Controller('users')
export class UserController {
  userService = new UserService();

  @Get()
  getUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page',  new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log({limit, page})
    return this.userService.getAllUsers();
  }

  // id is mandatory, rest are optional
  @Get(':id/:name{/:gender}')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    // the value we read from route params will be string

    console.log(typeof id, id);

    // pipes : parseIntPipe
    // to remove the +id (conversion) using pipe to convert string to number
    return this.userService.getUserById(id);
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
