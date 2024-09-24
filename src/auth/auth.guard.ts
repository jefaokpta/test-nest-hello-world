import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { ROLES_KEY } from './auth.decorator';
import { Role } from './role.enum';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly JWT_SECRET = this.configService.get<string>('JWT_SECRET');

  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly reflector: Reflector,
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
      console.log('🧨 Token inválido:', e);
      throw new UnauthorizedException('Token inválido');
    }
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    return requiredRoles.some((role) => request.user.roles?.includes(role));
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') || [];
    return type === 'Bearer' ? token : undefined;
  }
}
