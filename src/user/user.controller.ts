import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto, LoginUserDto, TUpdateUserDto } from '../dto/user.dto';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Get()
    findAll() {
        return this.userService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: number){
        return this.userService.findOne(Number(+id));
    }

    @Post()
    create(@Body() dto: CreateUserDto) {
        return this.userService.create(dto)
    }

    @Post('login')
    login(@Body() dto: LoginUserDto) {
        return this.userService.login(dto);
    }


    @Put(':id')
    update(@Param('id') id: number, @Body() dto: TUpdateUserDto){
        return this.userService.update(Number(+id), dto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.userService.remove(Number(+id))
    } 

}
