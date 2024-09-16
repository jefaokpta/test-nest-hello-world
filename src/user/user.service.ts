import { Injectable } from '@nestjs/common';
import { UserModel } from './user.model';

@Injectable()
export class UserService {
  public listUsers(): UserModel[] {
    return [
      new UserModel(1, 'John Doe'),
      new UserModel(2, 'Jane Doe')
    ];
  }
}
