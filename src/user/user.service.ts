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
    const users = await this.userRepository.find();
    return users.map((user) => new UserDto(user));
  }

  async createUser(userDto: UserDto): Promise<UserModel> {
    return await this.userRepository.save(userDto);
  }
}
