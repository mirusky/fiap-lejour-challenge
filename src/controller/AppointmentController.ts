import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Appointment } from "../entity/Appointment";

export class UserController {
  private appointmentRepository = getRepository(Appointment);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.appointmentRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.appointmentRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.appointmentRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let userToRemove = await this.appointmentRepository.findOne(
      request.params.id
    );
    await this.appointmentRepository.remove(userToRemove);
  }
}
