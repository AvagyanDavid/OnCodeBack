import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class ProjectService {
    constructor(private readonly prisma: PrismaService){}

    findAll(id: number){
        return this.prisma.project.findMany() // доделать
    }

    findOne(id: number){
        return this.prisma.project.findUnique({
            where: {id: id}
        })
    }

    create(id: number, name: string){
        // создание каталога проекта в рабочей директории
        // копируешь путь к каталогу проекта
        return this.prisma.project.create({
            data: {
                name: name,
                owner: {connect: {id: id}}
            }
        })
    }

    remove(id: number){
        return this.prisma.project.delete({
            where: {id}
        })
    }

    update(id: number, name: string){
        return this.prisma.project.update({
            where: {id},
            data: {
                name: name
            }
        })
    }

}