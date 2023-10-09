import { IActiveIdSchema } from "@/interface";
import { Schema, model, models } from "mongoose";

const ActiveIdSchema = new Schema<IActiveIdSchema>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
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

export const AppConfig =
  models.ActiveId || model<IActiveIdSchema>("ActiveId", ActiveIdSchema);
