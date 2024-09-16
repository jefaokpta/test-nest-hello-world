/**
 * @author Jefferson Alves Reis (jefaokpta) < jefaokpta@hotmail.com >
 * Date: 9/16/24
 */
import { UserModel } from './user.model';

export class UserDto {
  name: string;

  constructor(name: string);
  constructor(user: UserModel);
  constructor(nameOrUser: string | UserModel) {
    if (typeof nameOrUser === 'string') {
      this.name = nameOrUser;
    } else {
      this.name = nameOrUser.name;
    }
  }
}
