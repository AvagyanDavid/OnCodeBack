// import { Body, Controller, Get, Param, Post } from "@nestjs/common";
// import { MemberService } from "./member.service";

// @Controller('member')
// export class MemberController {
//     constructor(private readonly memberService: MemberService){}

//     // список всех участников для (id) одного проекта
//     // @Get()
//     // findAll() {
//     //     return this.memberService.findAll()
//     // }

//     // (id) проекта (id) участника
//     @Get()
//     findOne(@Param('id') id:number){
//         return this.memberService.findOne(Number(+id))
//     }

//     @Post()
//     create(@Body() userid:number, projecrid:number) {
//         return this.memberService.create(userid, projecrid)
//     }

//     // реализовать delete
    
// }