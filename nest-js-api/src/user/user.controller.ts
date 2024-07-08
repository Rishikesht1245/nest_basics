import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('users')
export class UserController {
    // jwt is the strategy we are using
    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    getMe(@Req() req:Request){
        console.log({user: req.user})
        return req.user;
    }
}
