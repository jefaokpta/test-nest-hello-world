import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auths')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  login(@Body() auth: AuthDto) {

  }
}
