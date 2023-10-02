import { Service } from "typedi";
import { CountryModel } from "../entities/Country";
import { CreateCountryInput } from "../input/CreateCountryInput";
import { UpdateCountryInput } from "../input/UpdateCountryInput";

@Service()
export class CountryRepository {
  async create(inputsForCreatingACountry: CreateCountryInput) {
    return await new CountryModel(inputsForCreatingACountry).save();
  }

  async update(inputsForUpdatingACountry: UpdateCountryInput) {
    return await CountryModel.findByIdAndUpdate(
      inputsForUpdatingACountry._id,
      inputsForUpdatingACountry
    );
  }

  async findCountry(inputsForUpdatingACountry: CreateCountryInput) {
    return await CountryModel.find({
      $or: [
        { name: inputsForUpdatingACountry.name },
        { code: inputsForUpdatingACountry.code },
      ],
    });
  }

  async getOne(_id: string) {
    return await CountryModel.findById(_id);
  }

  async getAll() {
    return await CountryModel.find();
  }

  async delete(_id: string) {
    return await CountryModel.deleteOne({ _id });
  }
}
