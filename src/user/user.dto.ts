/**
 * @author Jefferson Alves Reis (jefaokpta) < jefaokpta@hotmail.com >
 * Date: 9/16/24
 */
import { IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty({ message: 'Nome eh obrigatorio' })
  readonly name: string;

  constructor(userModel: UserDto);
  constructor(name: string);
  constructor(userModelOrName: UserDto | string) {
    if (userModelOrName instanceof UserDto) {
      this.name = userModelOrName.name;
      return;
    }
    this.name = userModelOrName;
  }
}
