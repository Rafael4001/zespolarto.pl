import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductsModule } from "./products/products.module";

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(
      "mongodb+srv://arto:2t3tjtsqehw8QYJN@cluster0-kl2gt.mongodb.net/nest-js?retryWrites=true&w=majority",
      { useUnifiedTopology: true, useNewUrlParser: true }
    ),
    ProductsModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
