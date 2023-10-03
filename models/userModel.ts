import { IUser } from "@/interface";
import { Schema, model } from "mongoose";

const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: [true, "Please provide a First Name"],
    },
    lastName: {
      type: String,
      required: [true, "Please provide a Last Name"],
    },
    email: {
      type: String,
      required: [true, "Please provide a email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
    phone: {
      type: String,
      required: [true, "Please provide a phone number"],
      unique: true,
    },
    whatsapp: {
      type: String,
      required: [true, "Please provide a WhatsApp number"],
      unique: true,
    },
    country: {
      type: String,
      required: [true, "Please provide a country"],
    },
    language: {
      type: String,
      required: [true, "Please provide a language"],
    },
    role: {
      type: String,
      default: "inactive",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    reference: String,
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const User = model<IUser>("users", userSchema);
