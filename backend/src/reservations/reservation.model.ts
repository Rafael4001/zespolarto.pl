import * as mongoose from "mongoose";
import {IsString} from "class-validator";

export const ReservationSchema = new mongoose.Schema({
  title: {type: String, required: true},
  city: {type: String, required: true},
  status: {type: String, required: true},
  weedingDate: {type: String, required: true},
});

export class Reservation {
  @IsString() readonly title: string;
  @IsString() readonly city: string;
  @IsString() readonly status: string;
  @IsString() readonly weedingDate: string;
}
