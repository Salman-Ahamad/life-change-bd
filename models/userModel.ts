import { IUser } from "@/interface";
import { Schema, model, models } from "mongoose";

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
    reference: {
      type: String,
      default: "-",
    },
    points: {
      type: Number,
      default: 0,
    },
    courses: {
      type: [Schema.Types.ObjectId],
      ref: "courses",
    },
    myReferences: {
      type: [Schema.Types.ObjectId],
      ref: "myReferences",
    },
    posts: {
      type: [Schema.Types.ObjectId],
      ref: "posts",
    },
    likes: {
      type: [Schema.Types.ObjectId],
      ref: "posts",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verifyToken: String,
    verifyTokenExpiry: Date,
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    // verifyToken: {
    //   type: String,
    //   default: "",
    // },
    // verifyTokenExpiry: {
    //   type: Date || undefined,
    //   default: undefined,
    // },
    // forgotPasswordToken: {
    //   type: String,
    //   default: "",
    // },
    // forgotPasswordTokenExpiry: {
    //   type: Date || undefined,
    //   default: undefined,
    // },
  },

  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const User = models.users || model<IUser>("users", userSchema);
