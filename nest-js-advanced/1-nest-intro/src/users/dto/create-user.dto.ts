import { IsBoolean, IsEmail, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDTO {
  @IsString({message : "name should be a string value"})
  @IsNotEmpty()
  @MinLength(3, {message: "Name should have a min length of 3"})
  name: string;

  @IsInt()
  age: number;

  @IsString()
  @IsOptional()
  gender?: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsBoolean()
  isMarried: boolean;
}
