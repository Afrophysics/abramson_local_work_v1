/**
 * End-to-end smoke demo using an in-memory MongoDB.
 * No external MongoDB process required.
 *
 *   npm run demo
 */
import { randomUUID } from "node:crypto";
import { MongoMemoryServer } from "mongodb-memory-server";
import { connectDb, disconnectDb } from "../db/connect.js";
import {
  createUpdate,
  findByClientName,
  findByObjectId,
  findByUpdateId,
  listRecent,
  deleteByUpdateId,
} from "../db/clientUpdates.js";

async function main() {
  const mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri("abramson_local_work");

  console.log("Starting in-memory MongoDB…");
  await connectDb(uri);

  const updateId = randomUUID();

  const created = await createUpdate({
    objectId: "obj-demo-1",
    clientName: "Demo Client",
    update: "Created via demo script",
    updateId,
    timestamp: new Date(),
  });

  console.log("\nCreated document:");
  console.log({
    _id: String(created._id),
    objectId: created.objectId,
    clientName: created.clientName,
    update: created.update,
    updateId: created.updateId,
    timestamp: created.timestamp.toISOString(),
  });

  const byUpdateId = await findByUpdateId(updateId);
  const byClient = await findByClientName("Demo Client");
  const byObject = await findByObjectId("obj-demo-1");
  const recent = await listRecent({ limit: 5 });

  console.log("\nQuery checks:");
  console.log(`  findByUpdateId → ${byUpdateId ? "ok" : "miss"}`);
  console.log(`  findByClientName → ${byClient.length} row(s)`);
  console.log(`  findByObjectId → ${byObject.length} row(s)`);
  console.log(`  listRecent → ${recent.length} row(s)`);

  const deleted = await deleteByUpdateId(updateId);
  console.log(`  deleteByUpdateId → ${deleted ? "ok" : "miss"}`);

  await disconnectDb();
  await mongod.stop();
  console.log("\nDemo complete. Schema and CRUD helpers are working.");
}

main().catch((err) => {
  console.error("Demo failed:", err);
  process.exitCode = 1;
});
