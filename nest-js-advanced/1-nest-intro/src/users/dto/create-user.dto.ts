import { IsBoolean, IsEmail, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, maxLength, MinLength } from "class-validator";

// only need to mention the fields what we get from the req.body (not the fields like id or createdAt)
// the validations should be same us entity (user.entity)
export class CreateUserDTO {
  @IsString({message : "name should be a string value"})
  @IsNotEmpty()
  @MinLength(3, {message: "Name should have a min length of 3"})
  @MaxLength(24, {message : "Name should be less than 100 chars"})
  username: string;

  // @IsInt()
  // age: number;

  // @IsString()
  // @IsOptional()
  // gender?: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
