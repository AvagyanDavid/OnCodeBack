import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserModule } from './user/user.module';
import { FriendModule } from './friend/friend.module';
import { ProjectController } from './project/project.contoller';
import { ProjectModule } from './project/project.module';
import { MemberModule } from './member/member.module';

@Module({
  imports: [UserModule,FriendModule,ProjectModule,MemberModule],
})
export class AppModule {}
