import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly log = new Logger(AuthGuard.name);
  private readonly JWT_SECRET = this.configService.get<string>('JWT_SECRET');

  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException('Token nao encontrado');
    }

    try {
      request.user = await this.jwtService.verifyAsync(token, {
        secret: this.JWT_SECRET,
      });
    } catch (e) {
      this.log.error(e);
      throw new UnauthorizedException('Token inválido');
    }
    return true
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') || [];
    return type === 'Bearer' ? token : undefined;
  }
}
