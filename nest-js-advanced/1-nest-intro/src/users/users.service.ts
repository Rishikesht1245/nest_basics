import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { AuthService } from 'src/auth/auth.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

// Injecting user repository from entity
constructor(
  @InjectRepository(User)
  private userRepository : Repository<User>
){}


  public async getAllUsers(gender ?:string){
    return await this.userRepository.find();
  }

  getUserById(name : string){
  }

  public async createUser(userDto :CreateUserDTO ){
    
    // 1. validate if a user exist with the given email
    const user = await this.userRepository.findOne({where : {email : userDto?.email}})

    // Handle the error (not proper way later we will implement)
    if(user){
      return `User with the given email : ${userDto.email} alredy exists.`
    }

    // create the user
    let newUser =  this.userRepository.create(userDto);
    newUser = await this.userRepository.save(newUser);

    return newUser;
  }


}
