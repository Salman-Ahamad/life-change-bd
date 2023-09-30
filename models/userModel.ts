import { IUser } from "@/interface";
import { Schema, model, models } from "mongoose";

const userSchema = new Schema<IUser>(
  {
    first_name: {
      type: String,
      required: [true, "Please provide a First Name"],
      unique: true,
    },
    last_name: {
      type: String,
      required: [true, "Please provide a Last Name"],
      unique: true,
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

export const User = models.users || model("users", userSchema);
