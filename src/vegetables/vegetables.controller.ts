import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VegetablesService } from './vegetables.service';
import { CreateVegetableDto } from './dto/create-vegetable.dto';
import { UpdateVegetableDto } from './dto/update-vegetable.dto';

@Controller('vegetables')
export class VegetablesController {
  constructor(private readonly vegetablesService: VegetablesService) {}

  @Post()
  create(@Body() createVegetableDto: CreateVegetableDto) {
    return this.vegetablesService.create(createVegetableDto);
  }

  @Get()
  findAll() {
    return this.vegetablesService.findAll();
  }

  @Get('home-list')
  async findHomeList() {
    const data = await this.vegetablesService.findHomeList();
    return data;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vegetablesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVegetableDto: UpdateVegetableDto,
  ) {
    return this.vegetablesService.update(+id, updateVegetableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vegetablesService.remove(+id);
  }
}
