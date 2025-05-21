// import { Injectable } from "@nestjs/common";
// import { PrismaService } from "src/prisma.service";

// @Injectable()
// export class MemberService {
//     constructor(private readonly prisma: PrismaService){}

//     // найти всех участников проекта
//     // async findAll(user: {id: number},project: {id: number} ) {
//     //     return await this.prisma.member.findMany({
//     //         where: {
                
//     //         }
//     //     })
//     // }

//     async findOne(id:number) {
//         return await this.prisma.member.findUnique({
//             where: {id: id}
//         })
//     }

//     async create(userid: number, projecrid: number){
//         return await this.prisma.member.create({
//             data: {
//                 user: {connect: {id: userid}},
//                 project: {connect: {id: projecrid }}
//             }
//         })
//     }

//     async remove(id: number) {
//         return await this.prisma.member.delete({
//             where: {id}
//         })
//     }
// }