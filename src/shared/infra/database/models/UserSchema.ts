import { Schema, Document, model } from "mongoose";

export interface IUserInterface extends Document {
  taxId: string;
  username: string;
  email: string;
  password: string;
}

const UserSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    autoCreate: true,
  }
);

const User = model<IUserInterface>("User", UserSchema, "User");

export default User;
