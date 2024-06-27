import { Controller, Post } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';

@Controller()
export class AuthController {
  @Post('login')
  logIn(payload: LoginDto) {
    return '';
  }
}
