import { createParamDecorator, ExecutionContext } from "@nestjs/common";

// creating custom decorators
export const GetUser = createParamDecorator((data : unknown, ctx : ExecutionContext) => {

    // switchTOHTTP means we are using http
    const request: Express.Request = ctx.switchToHttp().getRequest();
    return request.user;
})