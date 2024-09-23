import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auths')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post() @HttpCode(HttpStatus.OK)
  async login(@Body() auth: AuthDto) {
    return this.authService.signIn(auth);
  }
}
