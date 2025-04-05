import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { UserEntity } from '../models/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  create(user: UserEntity): Observable<UserEntity> {
    return from(this.userRepository.save(user));
  }

  findOne(id: number): Observable<UserEntity | null> {
    return from(this.userRepository.findOne({ where: { id } }));
  }

  findAll(): Observable<UserEntity[]> {
    return from(this.userRepository.find());
  }

  deleteOne(id: number): Observable<DeleteResult> {
    return from(this.userRepository.delete(id));
  }

  updateOne(id: number, user: Partial<UserEntity>): Observable<UpdateResult> {
    return from(this.userRepository.update(id, user));
  }
}
