import { Module } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersServiceImpl } from './users.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [
    { provide: 'UsersService', useClass: UsersServiceImpl },
    { provide: 'UsersRepository', useValue: User },
  ],
})
export class UsersModule {}
