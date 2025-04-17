import { Type } from "class-transformer";
import { IsBoolean, IsOptional } from "class-validator";

export class GetUserParamDTO{
    @IsBoolean()
    @IsOptional()
    // the route paramter will be string so we need to transform it to boolean value 
    @Type(() => Boolean)
    isMarried ?: boolean
}