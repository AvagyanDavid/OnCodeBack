import { isEmail, IsEmail, IsPhoneNumber, IsString, MinLength } from "class-validator"

export class CreateUserDto {
    @IsString()
    nickname: string;

    @IsPhoneNumber()
    phone: string;
    
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    password: string;
}

export type TUpdateUserDto = Partial<CreateUserDto>

export class LoginUserDto {
    @IsEmail()
    email: string;

    @IsString()
    password: string;
}