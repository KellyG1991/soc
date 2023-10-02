import { Service } from "typedi";
import { Country } from "../entities/Country";
import { CreateCountryInput } from "../input/CreateCountryInput";
import { CountryRepository } from "../repositories/CountryRepository";

@Service()
export class CountryService {
  constructor(private readonly countryRepository: CountryRepository) {}

  async createCountry(
    createCountryInput: CreateCountryInput
  ): Promise<Country> {
    /**
     * 1. To make sure the inputs the user is giving me is correct
     * 2. Make sure there are no duplicates in the database
     * 3. create the country
     * 4. return the country
     */
    const countryExists = await this.countryRepository.findCountry(
      createCountryInput
    );
    if (countryExists) throw Error("Country already exists");
    return this.countryRepository.create(createCountryInput);
  }
}
