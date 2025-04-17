import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDTO } from "./create-user.dto";

// applies all the property validations in create user DTO and make it optional
export class UpdateUserDto extends PartialType(CreateUserDTO){

}
