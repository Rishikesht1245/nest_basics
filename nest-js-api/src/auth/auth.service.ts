import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

// provides need to be defined with the Injectable decorator
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signup() {
    return { message: 'I have singed up' };
  }
  signin() {
    return { message: 'I have signed in' };
  }
}
