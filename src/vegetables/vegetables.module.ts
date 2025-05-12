import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VegetablesService } from './vegetables.service';
import { VegetablesController } from './vegetables.controller';
import { Vegetable } from './entities/vegetable.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vegetable])],
  controllers: [VegetablesController],
  providers: [VegetablesService],
})
export class VegetablesModule {}
