import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ReservationsModule } from "./reservations/reservations.module";

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://arto:2t3tjtsqehw8QYJN@cluster0-kl2gt.mongodb.net/nest-js?retryWrites=true&w=majority",
      { useUnifiedTopology: true, useNewUrlParser: true }
    ),
    ReservationsModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
