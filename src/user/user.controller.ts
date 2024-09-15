import { UserService } from './user.service';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/users')
  public listUsers(): { name: string; id: number }[] {
    return this.userService.listUsers();
  }
}
