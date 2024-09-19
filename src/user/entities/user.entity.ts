import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserPhoneEntity } from './user.phone.entity';

/**
 * @author Jefferson Alves Reis (jefaokpta) < jefaokpta@hotmail.com >
 * Date: 9/16/24
 */
@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  readonly id: number;
  @Column()
  readonly name: string;
  @OneToMany(() => UserPhoneEntity, userPhone => userPhone.user, {cascade: true, eager: true})
  readonly phones: UserPhoneEntity[];
  @CreateDateColumn()
  readonly createdAt: Date;
  @UpdateDateColumn()
  readonly updatedAt: Date;

}
