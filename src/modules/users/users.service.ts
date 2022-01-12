import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from './users.interface';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';

@Injectable()
export class UsersServiceImpl implements UsersService {
  constructor(
    @Inject('UsersRepository') private readonly userRepository: typeof User,
  ) {}

  getUsers(): string {
    return 'Users';
  }

  async create(user: User): Promise<User> {
    const { password } = user;

    user.password = await this.hashPassword(password);

    const result: User = await this.userRepository.create(user);

    return result;
  }

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSaltSync(10);
    return bcrypt.hash(password, salt);
  }
}
