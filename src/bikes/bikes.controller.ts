import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BikesService } from './bikes.service';
import { BikesAddDto } from './dtos/bikes_add.dto';
import { Bike } from './bikes.schema';

@Controller('bikes')
export class BikesController {
  constructor(private readonly bikesService: BikesService) {}

  @Get()
  async getAll(): Promise<Bike[]> {
    return this.bikesService.findAll();
  }

  @Get('brand/:brandId')
  async getBikesByBrand(@Param('brandId') brandId: string): Promise<Bike[]> {
    return this.bikesService.findBikesByBrand(brandId);
  }

  @Post()
  async create(@Body() bikeAddDto: BikesAddDto): Promise<Bike> {
    return this.bikesService.create(bikeAddDto);
  }
}
