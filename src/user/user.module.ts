import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from 'src/prisma.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'SECRET_KEY',
      signOptions: {expiresIn: '1h'},
    }),
  ],
  controllers: [UserController],
  providers: [UserService, PrismaService]
})
export class UserModule {}
