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
import { User } from '../models/user.interface';
import { DeleteResult, UpdateResult } from 'typeorm';
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() user: User): Observable<User> {
    return this.userService.create(user);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Observable<User | null> {
    return this.userService.findOne(id);
  }
  @Get()
  findAll(): Observable<User[]> {
    return this.userService.findAll();
  }

  @Delete(':id')
  deleteOne(@Param('id', ParseIntPipe) id: number): Observable<DeleteResult> {
    return this.userService.deleteOne(id);
  }

  @Put(':id')
  updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() user: User,
  ): Observable<UpdateResult> {
    return this.userService.updateOne(id, user);
  }
}
