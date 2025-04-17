import { IsBoolean, IsEmail, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDTO {
  @IsNumber()
  id: number;
  
  @IsString({message : "name should be a string value"})
  @IsNotEmpty()
  @MinLength(3, {message: "Name should have a min length of 3"})
  name: string;

  @IsInt()
  age: number;

  @IsString()
  @IsOptional()
  gender?: string;

  @IsEmail()
  email: string;

  @IsBoolean()
  isMarried: boolean;
}
