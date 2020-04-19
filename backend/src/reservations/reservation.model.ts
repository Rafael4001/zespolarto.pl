import * as mongoose from "mongoose";
import { IsString } from "class-validator";

export const ReservationSchema = new mongoose.Schema({
  title: {
    type: String
  }
});

export class Reservation {
  @IsString() readonly title: string;
}
