import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { API_KEY_MISSING } from 'src/errors/message.errors'

@Injectable()
export class ApiKeyGuard implements CanActivate {
  private readonly validApiKey = process.env.API_KEY

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest()
    const apiKey = request.headers['x-api-key']

    if (apiKey !== this.validApiKey) {
      throw new ForbiddenException({ error: API_KEY_MISSING })
    }

    return true
  }
}
