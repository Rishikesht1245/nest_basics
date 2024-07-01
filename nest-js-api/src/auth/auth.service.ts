import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from "argon2";
import { AuthDto } from './dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

// provides need to be defined with the Injectable decorator
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) { }

  async signup(dto: AuthDto) {
    // generate the hashed password 
    const hash = await argon.hash(dto.password)

    try {
      // save the user in the db
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash: hash
        },
        // select:{
        //   id: true,
        //   email: true
        // }
      });

      delete user.hash;
      // return the saved user
      return user;
    } catch (error) {
      if(error instanceof PrismaClientKnownRequestError){
        // prisma error codes
        if(error.code === 'P2002'){
          // forbidden error 403
          throw new ForbiddenException("Credentials taken")
        }
      }
      throw error;
    }
  }
  signin() {
    return { message: 'I have signed in' };
  }
}
