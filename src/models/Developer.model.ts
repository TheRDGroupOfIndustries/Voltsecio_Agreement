import { Schema, model, models } from "mongoose";

export interface IDeveloper {
  developerName: string;
  signature: string;
  date?: string;
}

const DeveloperSchema = new Schema(
  {
    developerName: { type: String, required: true },
    signature: { type: String },
    date: { type: String },
  },
  { timestamps: true }
);

export const Developer = models.Developer || model("Developer", DeveloperSchema);
