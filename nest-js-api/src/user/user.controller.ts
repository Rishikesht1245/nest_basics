import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';
import { Request } from 'express';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';

@Controller('users')
export class UserController {
    // jwt is the strategy we are using
    // @UseGuards(AuthGuard('jwt'))
    // instead of the above method we can create a custom guard and use it
    @UseGuards(JwtGuard)
    @Get('me')
    // getMe(@Req() req:Request){
    // instead the above we can use like the below using the custom decorator
    getMe(@GetUser('') user : User){
        console.log({user})
        return user;
    }
}
