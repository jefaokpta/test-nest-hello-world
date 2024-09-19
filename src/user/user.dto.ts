/**
 * @author Jefferson Alves Reis (jefaokpta) < jefaokpta@hotmail.com >
 * Date: 9/16/24
 */
import { IsNotEmpty } from 'class-validator';
import { UserModel } from './user.model';

export class UserDto {
  @IsNotEmpty({ message: 'Nome eh obrigatorio' })
  readonly name: string;

  constructor(userModel: UserModel);
  constructor(name: string);
  constructor(userModelOrName: UserModel | string) {
    if (userModelOrName instanceof UserModel) {
      this.name = userModelOrName.name;
      return;
    }
    this.name = userModelOrName;
  }
}
