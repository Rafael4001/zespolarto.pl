import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { ReservationsService } from "./reservations.service";
import { ReservationsController } from "./reservations.controller";
import { ReservationSchema } from "./reservation.model";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Reservation", schema: ReservationSchema }
    ])
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService]
})
export class ReservationsModule {}
