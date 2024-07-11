import { createParamDecorator, ExecutionContext } from "@nestjs/common";

// creating custom decorators
export const GetUser = createParamDecorator((data :string | undefined, ctx: ExecutionContext) => {

    // switchTOHTTP means we are using http
    const request: Express.Request = ctx.switchToHttp().getRequest();

    // for returning particular user's data example email only
    if(data){
       return request.user[data]
    }
    return request.user;
})