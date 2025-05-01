import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { ProjectService } from "./project.service";
import { ProjectController } from "./project.contoller";

@Module({
    controllers: [ProjectController],
    providers: [ProjectService, PrismaService]
})

export class ProjectModule {}