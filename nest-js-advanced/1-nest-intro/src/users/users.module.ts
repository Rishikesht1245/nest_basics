import { Module } from "@nestjs/common";

// modules are decorated with @Module decorator.
// we need to pass the meta data objects
@Module({
    // other modules
    imports : [],
    // controllers
    controllers : [UserModule],
    // services
    providers : []
})
export class UserModule{}