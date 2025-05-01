import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { FriendService } from './friend.service';
import { CreateFriendDto, TUpdateFriendDto } from 'src/dto/friend.dto';


@Controller('friend')
export class FriendController {
  constructor(private readonly friendService: FriendService) {}

  @Post()
  create(@Body() dto: CreateFriendDto ) {
    return this.friendService.create(dto);
  }

  @Get()
  findAll() {
    return this.friendService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.friendService.findOne(Number(+id));
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: TUpdateFriendDto) {
    return this.friendService.update(Number(+id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.friendService.remove(Number(+id));
  }
}
