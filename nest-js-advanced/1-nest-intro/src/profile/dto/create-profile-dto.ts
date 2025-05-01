import { IsDate, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateProfileDto{
    @IsString({message : "First name should be string value"})
    // record is created when user create account (but all the values will be empty)
    // so we are setting as optional
    @IsOptional()
    @MinLength(3, {message : "First name should have a minimum of 3 characters."})
    @MaxLength(100)
    firstName ?: string;
    
    @IsString({message : "Last name should be string value"})
    @IsOptional()
    @MinLength(3, {message : "Last name should have a minimum of 3 characters."})
    @MaxLength(100)
    lastName ?: string;

    @IsString()
    @IsOptional()
    @MaxLength(10)
    gender ?: string;

    @IsOptional()
    @IsDate()
    dateOfBirth ?: string;


    @IsString()
    @IsOptional()
    bio ?: string;

    @IsString()
    @IsOptional()
    profileImage ?: string;
}