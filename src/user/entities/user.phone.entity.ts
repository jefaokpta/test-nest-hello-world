import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';


/**
 * @author Jefferson Alves Reis (jefaokpta) < jefaokpta@hotmail.com >
 * Date: 9/19/24
 */
@Entity('user_phones')
export class UserPhoneEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  readonly id: number;
  @Column()
  readonly phone: string;
  @ManyToOne(() => UserEntity, user => user.phones, {onDelete: 'CASCADE', orphanedRowAction: 'delete'})
  user: UserEntity

}
