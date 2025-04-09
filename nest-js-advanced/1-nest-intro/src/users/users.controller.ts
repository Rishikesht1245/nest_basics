import { Controller, Get, Post } from "@nestjs/common";

// we can mention the url enpoint here
@Controller('users')
export class UserController{
    @Get()
    getUsers() : string {
        return "You have get reqeust to fetch all users"
    }

    @Post()
    createUser() : string{
        return "A new users have been created"
    }

}