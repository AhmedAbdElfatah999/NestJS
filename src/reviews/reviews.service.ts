import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './entities/review.entity';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepo: Repository<Review>,
  ) {}

  findAll() {
    return this.reviewRepo.find({ relations: ['user', 'product'] });
  }

  findOne(id: string) {
    return this.reviewRepo.findOne({ where: { id }, relations: ['user', 'product'] });
  }

  create(data: Partial<Review>) {
    const review = this.reviewRepo.create(data);
    return this.reviewRepo.save(review);
  }

  update(id: string, data: Partial<Review>) {
    return this.reviewRepo.update(id, data);
  }

  remove(id: string) {
    return this.reviewRepo.delete(id);
  }
}
