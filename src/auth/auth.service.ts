import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {
  }

  signIn(auth: AuthDto) {
    return this.userService.getUserByName(auth.user);
  }
}
