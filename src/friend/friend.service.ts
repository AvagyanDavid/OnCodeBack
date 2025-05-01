import { Injectable } from '@nestjs/common';
import { CreateFriendDto, TUpdateFriendDto } from 'src/dto/friend.dto';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class FriendService {
  constructor(private readonly prisma: PrismaService){}

  async create(dto: CreateFriendDto) {
    return await this.prisma.friend.create({
      data: {
        sender: {connect: {id: dto.sender}},
        recipient: {connect: {id: dto.recipient}},
        status: dto.status,
      }
    })
  }

  findAll() {
    return this.prisma.friend.findMany();
  }

  findOne(id: number) {
    return this.prisma.friend.findUnique({
      where: {id: id}
    });
  }

  update(id: number, dto: TUpdateFriendDto) {
    return this.prisma.friend.update({
      where: {id},
      data: {
        status: dto.status
      }
    }
    );
  }

  remove(id: number) {
    return this.prisma.friend.delete({
      where: {id}
    });
  }
}
