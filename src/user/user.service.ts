import { Injectable } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { UserDto } from './user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async listUsers(): Promise<UserDto[]> {
    const users = await this.userRepository.find();
    return users.map((user) => new UserDto(user));
  }

  async createUser(userDto: UserDto): Promise<UserDto> {
    return await this.userRepository.save(userDto)
  }
}
