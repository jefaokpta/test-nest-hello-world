import { IsArray, IsNotEmpty, IsOptional } from 'class-validator';
import { UserPhoneEntity } from './entities/user.phone.entity';
import { UserEntity } from './entities/user.entity';
import { PartialType } from '@nestjs/mapped-types';
/**
 * @author Jefferson Alves Reis (jefaokpta) < jefaokpta@hotmail.com >
 * Date: 9/16/24
 */

export class UserDto extends PartialType(UserEntity){
  @IsOptional()
  readonly id: number
  @IsNotEmpty({ message: 'Nome eh obrigatorio' })
  readonly name: string
  @IsArray()
  readonly phones: UserPhoneEntity[]

}
