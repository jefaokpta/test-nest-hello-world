import { UserService } from './user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from './user.dto';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public async listUsers(): Promise<UserDto[]> {
    return await this.userService.listUsers()
  }

  @Post()
  public async createUser(@Body() userDto: UserDto): Promise<UserDto> {
    return await this.userService.createUser(userDto)
  }
}
