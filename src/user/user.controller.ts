import { UserService } from './user.service';
import { Controller, Get } from '@nestjs/common';
import { UserDto } from './user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/users')
  public listUsers(): UserDto[] {
    return this.userService.listUsers()
      .map((user) => new UserDto(user));
  }
}
