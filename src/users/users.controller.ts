import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { DbUserDto } from './dto/db-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { User as UserModel } from '@prisma/client';

@ApiTags('User')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) { }

  @Post()
  @ApiBody({ type: CreateUserDto })
  async create(
    @Body() createUserDto: UserModel
  ): Promise<UserModel> {
    return this.usersService.create(createUserDto);
  }

  @Get('')
  async findAll(
  ): Promise<UserModel[]> {
    return this.usersService.findAll({
    });
  }

  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
