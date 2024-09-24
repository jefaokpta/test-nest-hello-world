import { IsArray, IsNotEmpty, IsOptional } from 'class-validator';
import { UserPhoneEntity } from './entities/user.phone.entity';

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
  @IsOptional() @IsArray()
  readonly phones: UserPhoneEntity[];

  static copy(userPartial: Partial<UserDto>): UserDto {
    return {
      id: userPartial.id,
      name: userPartial.name,
      password: userPartial.password,
      phones: userPartial.phones
    };
  }
}

export type UserDtoNoPassword = Omit<UserDto, 'password'>;