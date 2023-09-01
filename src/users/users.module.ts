import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  // imports: [PrismaService],
  controllers: [UsersController],
  providers: [UserService, PrismaService],
})
export class UsersModule { }
