import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vegetable } from './entities/vegetable.entity';
import { CreateVegetableDto } from './dto/create-vegetable.dto';
import { UpdateVegetableDto } from './dto/update-vegetable.dto';

@Injectable()
export class VegetablesService {
  constructor(
    @InjectRepository(Vegetable)
    private readonly vegetableRepository: Repository<Vegetable>,
  ) {}

  create(createVegetableDto: CreateVegetableDto) {
    console.log('Creating vegetable with:', createVegetableDto);
    return 'This action adds a new vegetable';
  }

  findAll() {
    return `This action returns all vegetables`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vegetable`;
  }

  update(id: number, updateVegetableDto: UpdateVegetableDto) {
    console.log(`Update requested for id=${id}`, updateVegetableDto);
    return `This action updates a #${id} vegetable`;
  }

  remove(id: number) {
    return `This action removes a #${id} vegetable`;
  }

  async findHomeList(): Promise<Vegetable[]> {
    return await this.vegetableRepository.find({
      take: 10,
      order: { id: 'ASC' },
    });
  }
}
