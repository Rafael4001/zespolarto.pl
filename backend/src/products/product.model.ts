import * as mongoose from "mongoose";
import { IsString } from "class-validator";

export const ProductSchema = new mongoose.Schema({
  title: {
    type: String
  }
});

export class Product {
  @IsString() readonly title: string;
}
