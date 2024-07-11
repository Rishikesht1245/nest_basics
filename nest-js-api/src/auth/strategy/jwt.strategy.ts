import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PrismaService } from "../../../src/prisma/prisma.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt'){
    constructor(private config : ConfigService, private prisma:PrismaService){
        // calling the parent constructor
        // super will be called before anything so this cannot be called inside
        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey : config.get("JWT_SECRET")
        })
    }

    //  function to validate for the auth guard
    // token will be transformed into this object
    async validate (payload : {sub:number, email : string}){
        console.log({payload});

        const user = await this.prisma.user.findUnique({where: {id : payload.sub}});

        delete user.hash;
        // whatever we return here, it will be attaced as req.user object 
        return user;
    }

}