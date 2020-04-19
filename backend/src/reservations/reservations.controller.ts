import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param
} from "@nestjs/common";
import { ReservationsService } from "./reservations.service";
import { Reservation } from "./reservation.model";

@Controller("reservations")
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Get()
  async getAllReservations(): Promise<Array<Reservation>> {
    return await this.reservationsService.getAllReservations();
  }

  @Get("/:id")
  async getReservation(@Param("id") id: string): Promise<Reservation> {
    return await this.reservationsService.getReservation(id);
  }

  @Delete("/:id")
  async deleteReservation(@Param("id") id: string): Promise<Reservation> {
    return await this.reservationsService.deleteReservation(id);
  }

  @Put("/:id")
  async updateReservation(
    @Body() reservation: Reservation,
    @Param("id") id: string
  ): Promise<Reservation> {
    return await this.reservationsService.updateReservation(id, reservation);
  }

  @Post()
  async addReservation(
    @Body() reservation: Reservation
  ): Promise<{
    id: string;
  }> {
    const newProductId = await this.reservationsService.addReservation(reservation);
    return {
      id: newProductId
    };
  }
}
