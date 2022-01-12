import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RegisterUserDto } from './dtos/registerUserRequest.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.interface';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    @Inject('UsersService') private readonly usersService: UsersService,
  ) {}

  @Get()
  getUsers(): string {
    return this.usersService.getUsers();
  }

  @Post()
  async create(@Body() user: RegisterUserDto): Promise<User> {
    return this.usersService.create(user);
  }
}
