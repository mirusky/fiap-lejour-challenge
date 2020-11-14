import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Favorite } from "../entity/Favorite";

export class FavoriteController {
  private favoriteRepository = getRepository(Favorite);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.favoriteRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.favoriteRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.favoriteRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let userToRemove = await this.favoriteRepository.findOne(request.params.id);
    await this.favoriteRepository.remove(userToRemove);
  }
}
