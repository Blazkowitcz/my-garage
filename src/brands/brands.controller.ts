import { Controller, Get, Post, Body } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsAddDto } from './dtos/brands_add.dto';
import { Brand } from './brands.schema';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Get()
  async getAll(): Promise<Brand[]> {
    return this.brandsService.findAll();
  }

  @Post()
  async create(@Body() brandAddDto: BrandsAddDto): Promise<Brand> {
    return this.brandsService.create(brandAddDto);
  }
}
