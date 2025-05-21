import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileGateway } from './file.gateway';
import { PrismaService } from 'src/prisma.service';
import { Hub } from './hub';

@Module({
  providers: [FileGateway, FileService, PrismaService, Hub],
})
export class FileModule {}
