import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

// 'auth' will act as common prefix for auth routes
@Controller('auth')
export class AuthController {
  // Instead of creating instance we just need to use the below
  // private authService = new AuthService();

  // this will do the same as above
  constructor(private authService: AuthService) {}

  @Post('signup')
  // @Req decorator to mention it is reqeust and the type of Request.
  // using parseInt pipe to convert string to number
  signup(@Body() dto: AuthDto) {
    console.log({ dto });
    return this.authService.signup();
  }

  @Post('signin')
  signIn() {
    return this.authService.signin();
  }
}
