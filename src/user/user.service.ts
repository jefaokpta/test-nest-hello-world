import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async createUser(userDto: UserDto): Promise<UserDto> {
    if (userDto.password === undefined) {
      throw new HttpException('Password é obrigatorio', HttpStatus.BAD_REQUEST)
    }
    const passwordHash = bcrypt.hashSync(userDto.password, 10);
    const userPart = {...userDto, password: passwordHash}
    return UserDto.copy(await this.userRepository.save(userPart))
  }
}
