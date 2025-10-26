import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AuditLoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(AuditLoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { method, url, user } = request;

    const username = user?.username || 'anonymous';
    const role = user?.role || 'no-role';
    const start = Date.now();

    return next.handle().pipe(
      tap(() => {
        const duration = Date.now() - start;
        this.logger.log(
          `👤 Usuario: ${username} (Rol: ${role}) ejecutó ${method} ${url} en ${duration}ms`,
        );
      }),
    );
  }
}
