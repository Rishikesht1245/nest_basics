import { Controller, Get } from "@nestjs/common";

// we can mention the url enpoint here
@Controller('users')
export class UserController{
    @Get()
    getUsers() : string {
        return "hello users"
    }

}