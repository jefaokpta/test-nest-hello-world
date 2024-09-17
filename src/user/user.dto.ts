/**
 * @author Jefferson Alves Reis (jefaokpta) < jefaokpta@hotmail.com >
 * Date: 9/16/24
 */
import { IsNotEmpty } from 'class-validator';

export class UserDto {

  @IsNotEmpty({ message: 'Nome eh obrigatorio' })
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}
