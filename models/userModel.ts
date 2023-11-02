import { IUserSchema } from "@/interface";
import { Schema, model, models } from "mongoose";

const userSchema = new Schema<IUserSchema>(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
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
    image: {
      type: String,
    },
    reference: {
      type: String,
      default: "-",
      ref: "users",
    },
    balance: {
      type: Number,
      default: 0,
    },
    courses: {
      type: [Schema.Types.ObjectId],
      ref: "courses",
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
    settings: {
      admin: {
        type: Schema.Types.ObjectId,
        ref: "users",
        default: "6527ecf7577ff95a96133786",
      },
      controller: {
        type: String,
      },
      consultant: {
        type: String,
      },
      teacher: {
        type: String,
      },
      trainer: {
        type: String,
      },
      sgl: {
        type: String,
      },
      gl: {
        type: String,
      },
      activeNotice: {
        type: Boolean,
        default: true,
      },
      inactiveBonus: {
        type: Boolean,
        default: false,
      },
      activeBonus: {
        type: Boolean,
        default: false,
      },
      withdrawalFee: {
        type: Boolean,
        default: false,
      },
      sendWish: {
        type: Boolean,
        default: false,
      },
      sendMessage: {
        type: Date,
      },
      course: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const User = models?.users || model<IUserSchema>("users", userSchema);
