import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersAddDto } from './dtos/users_add.dto';
import { User } from './users.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() userAddDto: UsersAddDto): Promise<User> {
    return this.usersService.create(userAddDto);
  }
}
