import mongoose from "mongoose";

const cropRequestSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    farmerName: String,
    location: String,
    farmSize: String,
    cropName: String,
    variety: String,
    cropStage: String,
    sowingDate: String,
    soilType: String,
    irrigationMethod: String,
    symptoms: String,
    organicPreference: String,
    aiResponse: String,
  },
  { timestamps: true },
);

export const CropRequest =
  mongoose.models.CropRequest ||
  mongoose.model("CropRequest", cropRequestSchema);
