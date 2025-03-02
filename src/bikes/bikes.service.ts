import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bike, BikeDocument } from './bikes.schema';
import { BikesAddDto } from './dtos/bikes_add.dto';

@Injectable()
export class BikesService {
  constructor(
    @InjectModel(Bike.name) private readonly bikeModel: Model<BikeDocument>,
  ) {}

  /**
   * Create new bike
   * @param bikeAddDto {BikesAddDto}
   * @returns {Bike}
   */
  async create(bikeAddDto: BikesAddDto): Promise<Bike> {
    const bike = new this.bikeModel(bikeAddDto);
    return bike.save();
  }

  /**
   * Get all bikes
   * @returns {Bike[]}
   */
  async findAll(): Promise<Bike[]> {
    return this.bikeModel.find().populate('brand').exec();
  }

  /**
   * Get all bikes by brand
   * @param brandId {String}
   * @returns {Bike[]}
   */
  async findBikesByBrand(brandId: string): Promise<Bike[]> {
    return this.bikeModel.find({ brand: brandId }).exec();
  }
}
