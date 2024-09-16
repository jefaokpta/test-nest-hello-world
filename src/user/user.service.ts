import { Injectable } from '@nestjs/common';
import { UserModel } from './user.model';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {

  private readonly users: UserModel[] = [new UserModel(1, 'John Doe')];

  public listUsers(): UserModel[] {
    return this.users;
  }

  createUser(userDto: UserDto): UserModel {
    const user = new UserModel(this.users.length + 1, userDto.name);
    this.users.push(user);
    return user;
  }
}
