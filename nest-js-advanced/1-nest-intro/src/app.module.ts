import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { TweetModule } from './tweet/tweet.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { ProfileModule } from './profile/profile.module';
import { Profile } from './profile/profile.entity';

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
        autoLoadEntities : true,
        // entities: [User, Profile],
        synchronize: true,
        host: 'localhost',
        port: 5433,
        username: 'postgres',
        password: 'admin@123',
        database: 'nestjs',
      })
     
    }),
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
