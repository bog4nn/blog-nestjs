import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../models/user.entity';
import { from, Observable } from 'rxjs';
import { User } from '../models/user.interface';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  create(user: User): Observable<User> {
    return from(this.userRepository.save(user));
  }

  findOne(id: number): Observable<User | null> {
    return from(this.userRepository.findOne({ where: { id } }));
  }

  findAll(): Observable<User[]> {
    return from(this.userRepository.find());
  }

  deleteOne(id: number): Observable<DeleteResult> {
    return from(this.userRepository.delete(id));
  }

  updateOne(id: number, user: Partial<UserEntity>): Observable<UpdateResult> {
    return from(this.userRepository.update(id, user));
  }
}
