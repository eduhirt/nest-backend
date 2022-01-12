import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumberString,
  Length,
  IsEmail,
  IsOptional,
} from 'class-validator';

export class RegisterUserDto {
  @ApiProperty({
    required: true,
  })
  name: string;

  @IsOptional()
  @IsEmail()
  @ApiProperty({
    required: true,
  })
  email: string;

  @ApiProperty({
    required: true,
  })
  password: string;

  @ApiProperty({
    required: true,
  })
  @Length(11, 11)
  @IsNumberString()
  phone?: string;

  @IsNotEmpty()
  @IsNumberString()
  @Length(11)
  @ApiProperty({
    required: true,
  })
  cpf: string;
}
