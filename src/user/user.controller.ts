import { UserService } from './user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from './user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/users')
  public listUsers(): UserDto[] {
    return this.userService.listUsers()
      .map((user) => new UserDto(user.name));
  }

  @Post('/users')
  public createUser(@Body() userDto: UserDto): UserDto {
    console.log(userDto);
    return this.userService.createUser(userDto);
  }
}
