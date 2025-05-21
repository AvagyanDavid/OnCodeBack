// import { Injectable } from "@nestjs/common";
// import { PrismaService } from "src/prisma.service";

// @Injectable()
// export class ProjectService {
//     constructor(private readonly prisma: PrismaService){}

//     async findAll(id: number){
//         return await this.prisma.project.findMany() // доделать // список всех проектов по userid
//     }

//     // нахождение (id)одного проекта 
//     async findOne(id: number){
//         return await this.prisma.project.findUnique({
//             where: {id: id}
//         })
//     }

//     async create(id: number, name: string){
//         // создание каталога проекта в рабочей директории
//         // копируешь путь к каталогу проекта

//         // создать каталог
//         // получаю путь
//         // создаю запись в базе данных + путь
//         // return await this.prisma.project.create({
//         //     data: {
//         //         name: name,
//         //         owner: {connect: {id: id}}
//         //     }
//         // })
//     }

//     // по id проекта
//     async remove(id: number){
//         return await this.prisma.project.delete({
//             where: {id}
//         })
//     }

//     // по id проекта
//     async update(id: number, name: string){
//         return await this.prisma.project.update({
//             where: {id},
//             data: {
//                 name: name
//             }
//         })
//     }

// }