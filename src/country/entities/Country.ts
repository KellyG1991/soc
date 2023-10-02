import { getModelForClass, prop } from "@typegoose/typegoose";
import { Types } from "mongoose";

export class Country {
  @prop()
  _id!: Types.ObjectId;

  @prop()
  name!: string;

  @prop()
  code!: string;

  @prop({ default: Date.now })
  createdAt!: Date;

  @prop({ default: Date.now })
  updatedAt!: Date;
}

export const CountryModel = getModelForClass(Country, {
  schemaOptions: { collection: "countries" },
});
