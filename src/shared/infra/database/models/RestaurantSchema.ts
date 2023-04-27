import { Schema, Document, model } from "mongoose";
import { IResturantDTO } from "../../../../modules/restaurant/dtos/IRestaurantDTO";

const RestaurantSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    menu: {
      type: [
        {
          _id: {
            type: String,
          },
          menuName: {
            type: String,
          },
          description: {
            type: String,
          },
          price: {
            type: Number,
          },
        },
      ],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    autoCreate: true,
  }
);

const Restaurant = model<IResturantDTO>(
  "Restaurant",
  RestaurantSchema,
  "Restaurant"
);

export default Restaurant;
