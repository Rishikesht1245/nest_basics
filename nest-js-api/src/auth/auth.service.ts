import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../src/prisma/prisma.service';
import * as argon from "argon2";
import { AuthDto } from './dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

// provides need to be defined with the Injectable decorator
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService, private config:ConfigService) { }

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
      if (error instanceof PrismaClientKnownRequestError) {
        // prisma error codes
        if (error.code === 'P2002') {
          // forbidden error 403
          throw new ForbiddenException("Credentials taken")
        }
      }
      throw error;
    }
  }

  async signin(dto: AuthDto) {
    const user = await this.prisma.user.findUnique({ where: { email: dto.email } });

    if (!user) throw new ForbiddenException("Credentials Incorrect");

    // Compare password
    const pwMatches = await argon.verify(user.hash, dto.password);

    // password incorrect
    if (!pwMatches) throw new ForbiddenException("Password doesn't match!");

    // send back the user
    return this.signToken(user.id, user.email);
  }

  async signToken(userId: number, email: string): Promise<{access_token : string}> {
    const payload = {
      sub: userId,
      email: email,
    };
    const token =  await this.jwt.signAsync(payload, { expiresIn: '15m', secret: this.config.get("JWT_SECRET")  });

    return {
      access_token : token
    }
    
  }
}
