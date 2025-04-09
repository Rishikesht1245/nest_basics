import { Module } from "@nestjs/common";
import { UserController } from "./users.controller";

// modules are decorated with @Module decorator.
// we need to pass the meta data objects
@Module({
    // other modules
    imports : [],
    // controllers
    controllers : [UserController],
    // services
    providers : []
})
export class UserModule{}