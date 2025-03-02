import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BikesService } from './bikes.service';
import { BikesController } from './bikes.controller';
import { Bike, BikeSchema } from './bikes.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Bike.name, schema: BikeSchema }]),
  ],
  controllers: [BikesController],
  providers: [BikesService],
})
export class BikesModule {}
