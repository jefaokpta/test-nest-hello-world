import { IsArray, IsNotEmpty, IsOptional } from 'class-validator';
import { UserPhoneEntity } from './entities/user.phone.entity';
import { UserEntity } from './entities/user.entity';
/**
 * @author Jefferson Alves Reis (jefaokpta) < jefaokpta@hotmail.com >
 * Date: 9/16/24
 */

export class UserDto {
  @IsOptional()
  readonly id: number
  @IsNotEmpty({ message: 'Nome eh obrigatorio' })
  readonly name: string
  @IsOptional()
  readonly password: string
  @IsArray()
  readonly phones: UserPhoneEntity[];

  static copy(user: UserEntity): UserDto {
    return {
      id: user.id,
      name: user.name,
      password: user.password,
      phones: user.phones
    }
  }
}
