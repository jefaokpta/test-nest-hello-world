import { Injectable } from '@nestjs/common';
import { UserModel } from './user.model';
import { UserDto } from './user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserModel)
    private readonly userRepository: Repository<UserModel>,
  ) {}

  async listUsers(): Promise<UserDto[]> {
    const users = await this.userRepository.find()
    return users.map((user) => new UserDto(user));
  }

  createUser(userDto: UserDto): UserModel {
    // const user = new UserModel(this.users.length + 1, userDto.name);
    // this.users.push(user);
    return new UserModel(1, userDto.name);
  }
}
