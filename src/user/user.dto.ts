import { IsArray, IsNotEmpty, IsOptional } from 'class-validator';
import { UserPhoneEntity } from './entities/user.phone.entity';
import { UserEntity } from './entities/user.entity';
/**
 * @author Jefferson Alves Reis (jefaokpta) < jefaokpta@hotmail.com >
 * Date: 9/16/24
 */

export class UserDto {
  @IsOptional()
  readonly id: number;
  @IsNotEmpty({ message: 'Nome eh obrigatorio' })
  readonly name: string;
  @IsArray()
  readonly phones: UserPhoneEntity[];

  constructor(userOrName: UserEntity | UserDto | string) {
    if(userOrName instanceof UserEntity || userOrName instanceof UserDto){
      this.id = userOrName.id;
      this.name = userOrName.name;
      this.phones = userOrName.phones;
      return
  }
    this.name = userOrName;
  }
}
