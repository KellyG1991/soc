import { Application, Response } from "express";
import Container from "typedi";
import {
  CountryController,
  CreateCountryRequest,
} from "../country/controller/CountryController";

export const registerAllApiRoutes = (app: Application): void => {
  app.post(
    "/api/country/createCountryController",
    async (req: CreateCountryRequest, res: Response) => {
      const response = Container.get(CountryController).createCountryController(
        req,
        res
      );
      res.json(response);
    }
  );
};
