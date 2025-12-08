import { Schema, model, models } from "mongoose";

export interface IVoltSec {
  name: string;
  designation: string;
  signature: string;
  date?: string;
}

const VoltSecSchema = new Schema(
  {
    name: { type: String, required: true },
    designation: { type: String },
    signature: { type: String },
    date: { type: String },
  },
  { timestamps: true }
);

export const VoltSec = models.VoltSec || model("VoltSec", VoltSecSchema);
