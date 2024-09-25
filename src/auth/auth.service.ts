import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Role } from './role.enum';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(auth: AuthDto) {
    const user = await this.userService.getUserByName(auth.user);
    if (!user || !bcrypt.compareSync(auth.password, user.password)) {
      throw new HttpException('Usuario nao encontrado', HttpStatus.NOT_FOUND);
    }
    const roles = user.name === 'jefao' ? [Role.Admin, Role.User] : [Role.User];
    return {
      token: this.jwtService.sign({username: user.name, sub: user.id, roles}),
    };
  }

}
