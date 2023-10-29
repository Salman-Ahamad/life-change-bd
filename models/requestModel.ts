import { IRequestSchema } from "@/interface";
import { Schema, model, models } from "mongoose";

const requestSchema = new Schema<IRequestSchema>(
  {
    to: {
      type: String,
      required: true,
    },
    consultantId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Request =
  models?.request || model<IRequestSchema>("request", requestSchema);
