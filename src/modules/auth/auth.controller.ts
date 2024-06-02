import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { SignInDto } from './dto/sign-in.dto'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { MessageResponseModel } from 'src/models/message.response'
import { AuthResponseModel } from './model/auth-response.model'

@Controller('auth')
@ApiTags('Auth')
@ApiResponse({
  status: 500,
  description: 'Internal Server Error',
  type: MessageResponseModel
})
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: 200,
    description: 'Login with a valid user record and return a token ',
    type: AuthResponseModel
  })
  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.email, signInDto.password)
  }
}
