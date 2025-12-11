import { IsEmail, IsInt, IsString, MinLength } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @MinLength(2)
  name: string;

  @IsString()
  @MinLength(2)
  lastname: string;

  @IsEmail()
  email: string;

  @IsInt()
  age: number;
}
