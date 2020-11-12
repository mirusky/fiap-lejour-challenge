import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Wedding } from "../entity/Wedding";

export class UserController {
  private weddingRepository = getRepository(Wedding);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.weddingRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.weddingRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.weddingRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let userToRemove = await this.weddingRepository.findOne(request.params.id);
    await this.weddingRepository.remove(userToRemove);
  }
}
