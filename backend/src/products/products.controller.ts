import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param
} from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Product } from "./product.model";

@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getAllProducts(): Promise<Array<Product>> {
    return await this.productsService.getAllProducts();
  }

  @Get("/:id")
  async getProduct(@Param("id") id: string): Promise<Product> {
    return await this.productsService.getProduct(id);
  }

  @Delete("/:id")
  async deleteProduct(@Param("id") id: string): Promise<Product> {
    return await this.productsService.deleteProduct(id);
  }

  @Put("/:id")
  async updateProduct(
    @Body() product: Product,
    @Param("id") id: string
  ): Promise<Product> {
    return await this.productsService.updateProduct(id, product);
  }

  @Post()
  async addProduct(
    @Body() product: Product
  ): Promise<{
    id: string;
  }> {
    const newProductId = await this.productsService.insertProduct(product);
    return {
      id: newProductId
    };
  }
}
