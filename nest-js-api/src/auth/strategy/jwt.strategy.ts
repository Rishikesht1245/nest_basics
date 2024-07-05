import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt'){
    constructor(private config : ConfigService){
        // calling the parent constructor
        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey : config.get("JWT_SECRET")
        })
    }

    //  function to validate for the auth guard
    // token will be transformed into this object
    validate (payload : any){
        console.log({payload});
        // it will be attaced as req.user object 
        return payload;
    }

}