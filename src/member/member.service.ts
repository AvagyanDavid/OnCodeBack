import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class MemberService {
    constructor(private readonly prisma: PrismaService){}

    findAll() {
        return this.prisma.member.findMany()
    }

    findOne(id:number) {
        return this.prisma.member.findUnique({
            where: {id: id}
        })
    }

    create(userid: number, projecrid: number){
        return this.prisma.member.create({
            data: {
                user: {connect: {id: userid}},
                project: {connect: {id: projecrid }}
            }
        })
    }

    remove(id: number) {
        return this.prisma.member.delete({
            where: {id}
        })
    }
}