import { UserService } from './user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from './user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/users')
  public async listUsers(): Promise<UserDto[]> {
    return await this.userService.listUsers();
  }

  @Post('/users')
  public async createUser(@Body() userDto: UserDto): Promise<UserDto> {
    console.log(userDto);
    return await this.userService.createUser(userDto);
  }
}
