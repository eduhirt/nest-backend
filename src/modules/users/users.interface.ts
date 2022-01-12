import { RegisterUserDto } from './dtos/registerUserRequest.dto';
import { User } from './entities/user.entity';

export interface UsersService {
  getUsers(): string;

  hashPassword(password: string): Promise<string>;

  create(user: RegisterUserDto): Promise<User>;
}
