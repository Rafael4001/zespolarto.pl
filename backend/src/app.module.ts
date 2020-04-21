import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ReservationsModule } from "./reservations/reservations.module";

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://Rafal:9dkmUTqE3YhkZSsD@cluster0-u4efe.mongodb.net/weedingTerms?retryWrites=true&w=majority",
      { useUnifiedTopology: true, useNewUrlParser: true }
    ),
    ReservationsModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
