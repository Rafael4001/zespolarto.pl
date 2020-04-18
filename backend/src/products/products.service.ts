import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel("Product") private readonly productModule: Model<Product>
  ) {}

  async deleteProduct(id: string): Promise<Product> {
    const productToDelete = await this.productModule.findById(id);
    if (!productToDelete) {
      throw new NotFoundException("Not Fount product");
    }
    return productToDelete.delete();
  }
  async getAllProducts(): Promise<Array<Product>> {
    return await this.productModule.find();
  }

  async getProduct(id: string): Promise<Product> {
    const product = await this.productModule.findById(id);
    if (!product) {
      throw new NotFoundException("Not Fount product");
    }
    return product;
  }
  async insertProduct(product: Product): Promise<string> {
    const newProduct = new this.productModule(product);
    const result = await newProduct.save();
    return result.id as string;
  }

  async updateProduct(id: string, product: Product): Promise<Product> {
    const productToUpdate = await this.productModule.findById(id);
    if (!productToUpdate) {
      throw new NotFoundException("Not Fount product");
    }
    return productToUpdate.updateOne(product);
  }
}
