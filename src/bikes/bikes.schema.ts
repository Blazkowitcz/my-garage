import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Brand } from '../brands/brands.schema';

export type BikeDocument = HydratedDocument<Bike>;

@Schema()
export class Bike {
  @Prop({ required: true })
  name: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Brand', required: true })
  brand: Brand;
}

export const BikeSchema = SchemaFactory.createForClass(Bike);
