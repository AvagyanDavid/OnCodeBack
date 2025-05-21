// import { Injectable } from '@nestjs/common';
// import { CreateFriendDto, TUpdateFriendDto } from 'src/dto/friend.dto';
// import { PrismaService } from 'src/prisma.service';


// @Injectable()
// export class FriendService {
//   constructor(private readonly prisma: PrismaService){}

//   async create(dto: CreateFriendDto) {
//     return await this.prisma.friend.create({
//       data: {
//         sender: {connect: {id: dto.sender}},
//         recipient: {connect: {id: dto.recipient}},
//         status: dto.status,
//       }
//     })
//   }
  
//   // id user
//   async findAll(user: {id:number}) {
//     return await this.prisma.friend.findMany({
//       where: {
//         OR: [
//           { senderId: user.id },
//           { recipientId: user.id },
//         ],
//         status: true,
//       },
//       include: {
//         sender: true,
//         recipient: true,
//       },
//     });
//   }

//   // id user id friend
//   async findOne(user: {id: number}, id: number) {
//     return await this.prisma.friend.findUnique({
//       where: {
//         id: id,
//         OR: [
//           { senderId: user.id },
//           { recipientId: user.id }
//         ],
//         status: true
//       },
//       include: {
//         sender: true,
//         recipient: true
//       }
//     }
//     );
//   }

//   remove(id: number) {
//     return this.prisma.friend.delete({
//       where: {id}
//     });
//   }
  
// // НЕ СДЕЛАННО 
// //   // id user id friend   /// НЕ СДЕЛАННО /// ЕЩЁ В РАЗРАБОТКЕ 
// //   async update(user: {id: number}, id: number, dto: TUpdateFriendDto) {
// //     return await this.prisma.friend.update({
// //       where: {id},
// //       data: {
// //         status: dto.status
// //       }
// //     }
// //     );
// //   }
// // НЕ СДЕЛАННО 
// //   // id user id friend // НЕ СДЕЛАННО ЕЩЁ В РАЗРАБОТКЕ
// //   async remove(user: {id: number}, id: number) {
// //     return await this.prisma.friend.delete({
// //       where: {id}
// //     });
// //   }
// }
