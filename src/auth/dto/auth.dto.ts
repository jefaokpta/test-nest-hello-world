import { IsNotEmpty } from 'class-validator';

export class AuthDto {
  @IsNotEmpty()
  readonly user: string;
  @IsNotEmpty()
  readonly password: string;
}
