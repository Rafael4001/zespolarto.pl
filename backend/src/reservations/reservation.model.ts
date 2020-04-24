import * as mongoose from "mongoose";
import {IsString} from "class-validator";

export const ReservationSchema = new mongoose.Schema({
  weddingDate: {type: String, required: true},
  weddingAddress: {type: String, required: true},
  weddingHotelName: {type: String, required: true},
  weddingHotelAddress: {type: String, required: true},
  weddingStatus: {type: String, required: true},
  weddingAdditionalDetails: {type: String, required: true},
});

export class Reservation {
  @IsString() readonly weddingDate: string;
  @IsString() readonly weddingAddress: string;
  @IsString() readonly weddingHotelName: string;
  @IsString() readonly weddingHotelAddress: string;
  @IsString() readonly weddingStatus: string;
  @IsString() readonly weddingAdditionalDetails: string;
}
