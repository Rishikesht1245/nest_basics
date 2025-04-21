import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { TweetModule } from './tweet/tweet.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // import user defined modules here : then only nest js will know those modules are there
  // syncronous connect using for root method
  imports: [
    UserModule,
    TweetModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      imports : [],
      inject : [],
      useFactory: () => ({
        type: 'postgres',
        entities: [],
        synchronize: true,
        host: 'localhost',
        port: 5433,
        username: 'postgres',
        password: 'admin@123',
        database: 'nestjs',
      })
     
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
