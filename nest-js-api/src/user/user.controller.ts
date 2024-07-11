import { Controller, Get, Patch, Req, UseGuards,HttpCode, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';
import { Request } from 'express';
import { GetUser } from '../../src/auth/decorator/get-user.decorator';
import { JwtGuard } from '../../src/auth/guard';

// we can also add guards in the global level
@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
    // jwt is the strategy we are using
    // @UseGuards(AuthGuard('jwt'))
    // instead of the above method we can create a custom guard and use it
    // @UseGuards(JwtGuard)
    @Get('me')
    // getMe(@Req() req:Request){
    // instead the above we can use like the below using the custom decorator
    getMe(@GetUser('email') user : User){
        console.log({user})
        return user;
    }

    @HttpCode(HttpStatus.OK)
    @Patch('me')
    editUser(){
        // call the service here 
        return "hello editing the document"
    }
}
