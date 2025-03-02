import { IsString, IsEmail } from 'class-validator';

export class UsersAddDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
