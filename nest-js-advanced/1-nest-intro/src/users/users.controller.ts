import {
  Body,
  Controller,
  DefaultValuePipe,
  ValidationPipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Patch,
} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { GetUserParamDTO } from './dto/get-user-param.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// we can mention the url enpoint here
@Controller('users')
export class UserController {
  
  // nest js will inject the instance of user service using dependency injection
  constructor(private userService : UserService){
  }

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
    return this.userService.getUserById("hello");
  }

  @Post()
  createUser(@Body() user : CreateUserDTO) {
    // business logic present in the service class
    console.log({user : user instanceof CreateUserDTO})
    this.userService.createUser(user);

    return 'a new user has been created';
  }


  // DTO on route Params
  @Get('{:isMarried}')
  getUsersByMartial(@Param() param : GetUserParamDTO){

    console.log({param})

    return this.userService.getAllUsers();

  }

  @Patch()
  updateUser(@Body() body : UpdateUserDto){
    console.log(body)
  }
}
