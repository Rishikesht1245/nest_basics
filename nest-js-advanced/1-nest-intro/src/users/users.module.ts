import { forwardRef, Module } from "@nestjs/common";
import { UserController } from "./users.controller";
import { UserService } from "./users.service";
import { AuthModule } from "src/auth/auth.module";
import { User } from "./user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

// modules are decorated with @Module decorator.
// we need to pass the meta data objects
@Module({
    // other modules
    // imports : [forwardRef(() => AuthModule)],
    // controllers
    controllers : [UserController],
    // services
    providers : [UserService],
    // exports : to available in other modules
    exports : [UserService],
    // importing the entities
    imports : [TypeOrmModule.forFeature([User])]
})
export class UserModule{}