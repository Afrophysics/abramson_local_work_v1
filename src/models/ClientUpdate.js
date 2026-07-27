import mongoose from "mongoose";

/**
 * Client update log document.
 *
 * Fields:
 * - objectId   – business object this update refers to
 * - clientName – client the update belongs to
 * - update     – update payload / description
 * - updateId   – unique identifier for this update event
 * - timestamp  – when the update occurred
 */
const clientUpdateSchema = new mongoose.Schema(
  {
    objectId: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    clientName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    update: {
      type: String,
      required: true,
      trim: true,
    },
    updateId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    timestamp: {
      type: Date,
      required: true,
      default: Date.now,
      index: true,
    },
  },
  {
    collection: "client_updates",
    versionKey: false,
  }
);

clientUpdateSchema.index({ clientName: 1, timestamp: -1 });
clientUpdateSchema.index({ objectId: 1, timestamp: -1 });

export const ClientUpdate =
  mongoose.models.ClientUpdate ||
  mongoose.model("ClientUpdate", clientUpdateSchema);
