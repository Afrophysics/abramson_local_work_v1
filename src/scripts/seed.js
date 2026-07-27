import { randomUUID } from "node:crypto";
import { connectDb, disconnectDb } from "../db/connect.js";
import { createManyUpdates } from "../db/clientUpdates.js";
import { ClientUpdate } from "../models/ClientUpdate.js";

const sampleUpdates = [
  {
    objectId: "obj-1001",
    clientName: "Acme Corp",
    update: "Initial onboarding completed",
    updateId: randomUUID(),
    timestamp: new Date("2026-07-01T10:00:00Z"),
  },
  {
    objectId: "obj-1001",
    clientName: "Acme Corp",
    update: "Contract terms revised",
    updateId: randomUUID(),
    timestamp: new Date("2026-07-15T14:30:00Z"),
  },
  {
    objectId: "obj-2002",
    clientName: "Beacon Labs",
    update: "Status changed to active",
    updateId: randomUUID(),
    timestamp: new Date("2026-07-20T09:15:00Z"),
  },
  {
    objectId: "obj-3003",
    clientName: "Cedar Partners",
    update: "Billing contact updated",
    updateId: randomUUID(),
    timestamp: new Date("2026-07-25T16:45:00Z"),
  },
];

async function main() {
  await connectDb();

  const wipe = process.argv.includes("--wipe");
  if (wipe) {
    await ClientUpdate.deleteMany({});
    console.log("Cleared client_updates collection.");
  }

  const inserted = await createManyUpdates(sampleUpdates);
  console.log(`Seeded ${inserted.length} client update(s).`);
  console.table(
    inserted.map((doc) => ({
      objectId: doc.objectId,
      clientName: doc.clientName,
      update: doc.update,
      updateId: doc.updateId,
      timestamp: doc.timestamp.toISOString(),
    }))
  );
}

main()
  .catch((err) => {
    console.error("Seed failed:", err.message);
    process.exitCode = 1;
  })
  .finally(async () => {
    await disconnectDb();
  });
