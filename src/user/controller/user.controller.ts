import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UserEntity } from '../models/user.entity';
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() user: UserEntity): Observable<UserEntity> {
    return this.userService.create(user);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Observable<UserEntity | null> {
    return this.userService.findOne(id);
  }
  
  @Get()
  findAll(): Observable<UserEntity[]> {
    return this.userService.findAll();
  }

  @Delete(':id')
  deleteOne(@Param('id', ParseIntPipe) id: number): Observable<DeleteResult> {
    return this.userService.deleteOne(id);
  }

  @Put(':id')
  updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() user: UserEntity,
  ): Observable<UpdateResult> {
    return this.userService.updateOne(id, user);
  }
}
