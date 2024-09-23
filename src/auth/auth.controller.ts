import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auths')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() auth: AuthDto) {
    const user = await this.authService.signIn(auth);
    if (!user) throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
    return user;
  }
}
