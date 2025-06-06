import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService : AuthService){}

    isAuthenticated = false;

    @Post()
    login(@Body() body){
      return this.authService.login(body.username)
    }
}
