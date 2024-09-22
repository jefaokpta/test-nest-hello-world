import { Injectable, Logger } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { UserDto } from './user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}


  async listUsers(): Promise<UserDto[]> {
    const users = await this.userRepository.find();
    return users.map((user) => UserDto.copy(user));
  }

  async createUser(userDto: UserDto) {
    const passwordHash: string = bcrypt.hashSync(userDto.password, 10);
    Logger.log(passwordHash);
    const userPart = {...userDto, password: passwordHash};
    Logger.log(userPart);

    return UserDto.copy(await this.userRepository.save(userPart));
  }
}
