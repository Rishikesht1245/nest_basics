import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

// it should be inside module then only injectable will work.
@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    // calling the parent constructor
    super({
      datasources: {
        db: {
          url: config.get("DATABASE_URL")
        },
      },
    });
    // we will be able to access the env variables
    console.log(config)
  }
}
