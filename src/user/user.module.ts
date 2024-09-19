import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { UserPhoneEntity } from './entities/user.phone.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    UserEntity,
    UserPhoneEntity
  ])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
