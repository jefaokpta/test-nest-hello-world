import { UserService } from './user.service';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserDto } from './user.dto';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
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
