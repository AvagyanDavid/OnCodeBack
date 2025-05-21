import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto, LoginUserDto, TUpdateUserDto } from '../dto/user.dto';
import { TUpdateFriendDto } from 'src/dto/friend.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService, private readonly jwtService: JwtService){}

    async findAll() {
        return await this.prisma.user.findMany()
    }

    async findOne(id: number) {
        return await this.prisma.user.findUnique({
            where: {id: id}
        })
    }

    async create(dto: CreateUserDto){
        const hashedPassword = await bcrypt.hash(dto.password, 10);
        const user = await this.prisma.user.create({
            data: {
                nickname: dto.nickname,
                phone: dto.phone,
                email: dto.email,
                password: hashedPassword,
            },
        })
        return this.generateToken(user);
    }

    async login(dto: LoginUserDto){
        const user = await this.prisma.user.findUnique({
            where: {email: dto.email} 
        });
        if (!user || !(await bcrypt.compare(dto.password, user.password))) {
            throw new UnauthorizedException('Invalid email or password');
        }
        return this.generateToken(user);
    }

    private generateToken(user: {id: number, email: string}){
        const payload = { sub: user.id, email: user.email };
        return {
            acces_token: this.jwtService.sign(payload),
        };
    }


    async remove(id: number){
        return await this.prisma.user.delete({
            where: {id}
        })
    }

    async update(id:number, dto: TUpdateUserDto){
        return await this.prisma.user.update({
            where: {id},
            data: dto
        })
    }
}