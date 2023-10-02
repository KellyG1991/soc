import { Request, Response } from "express";
import { Service } from "typedi";
import { CreateCountryInput } from "../input/CreateCountryInput";
import { CountryService } from "../service/CountryService";

export type CreateCountryRequest = Request<CreateCountryInput>;

@Service()
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  async createCountryController(req: CreateCountryRequest, res: Response) {
    return this.countryService.createCountry(req.body);
  }
}
