import { Body, Controller, Get, Header, Headers, HttpStatus, Param, Post, Query, Redirect, Req, Res } from "@nestjs/common";
import { Response } from "express";

@Controller("/auth")
export class AuthController {
     
    @Post("/sign-up")
    // 1. accessing request object and body
    createUser(@Req() req: Request, @Body() body ): string{
        // no need to parse the request body, it will add to it directly
        console.log({
            "request body" : req.body,
            "decorator body" : body
        })
        return "This route will create a user"
    }

    // 2. access the params passed in the route
    @Post("/sign-in/:id")
    loginUser(@Param() params): string {
        if(params?.id){
            console.log({user_id : params?.id})
        } 
        return "this route will login a user"
    }

    // 3. Query params and redirect
    // here if id is provided in query params the route will redirect to fb otherwise to instagram
    @Get("/user")
    @Redirect("https://instagram.com", 301)
    getDocs(@Query('id') userId) {
        console.log({
            userId : userId
        })
        if (userId && userId === '45') {
            // return object's url will replace the url present in Redirect Decorator
          return { url: 'https://facebook.com' };
        }
      }

      // 4. Accessing the Header 
      @Get('/user/:id')
      // Header and Headers are different
      // Header : used to set the response header
      @Header('Cache-Control', 'none')
      // Headers used to access the request headers
      getUser(@Headers() headers) : string{
        console.log(headers.xtoken);
        return "this reqeust will return a user"
      }

      // 5. Response object 
      @Get("/user/:name")
      validateUserName(@Res() res : Response){
        return res.status(HttpStatus.OK).json({"message" : "User found successfully"})
      }


}