import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { Reservation } from "./reservation.model";

@Injectable()
export class ReservationsService {
  constructor(
    @InjectModel("Reservation")
    private readonly reservationModule: Model<Reservation>
  ) {}

  async deleteReservation(id: string): Promise<Reservation> {
    const reservationToDelete = await this.reservationModule.findById(id);
    if (!reservationToDelete) {
      throw new NotFoundException("Not Fount reservation");
    }
    return reservationToDelete.delete();
  }

  async getAllReservations(): Promise<Array<Reservation>> {
    return await this.reservationModule.find();
  }

  async getReservation(id: string): Promise<Reservation> {
    const reservation = await this.reservationModule.findById(id);
    if (!reservation) {
      throw new NotFoundException("Not Fount reservation");
    }
    return reservation;
  }

  async addReservation(reservation: Reservation): Promise<string> {
    const newReservation = new this.reservationModule(reservation);
    const result = await newReservation.save();
    return result.id as string;
  }

  async updateReservation(
    id: string,
    reservation: Reservation
  ): Promise<Reservation> {
    const reservationToUpdate = await this.reservationModule.findById(id);
    if (!reservationToUpdate) {
      throw new NotFoundException("Not Fount reservation");
    }
    return reservationToUpdate.updateOne(reservation);
  }
}
