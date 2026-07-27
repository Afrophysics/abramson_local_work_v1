# abramson_local_work_v1

MongoDB store for client update records.

## Collection schema: `client_updates`

| Field | Type | Notes |
| --- | --- | --- |
| `_id` | ObjectId | MongoDB document id (auto) |
| `objectId` | string | Business object this update refers to |
| `clientName` | string | Client name |
| `update` | string | Update text / payload |
| `updateId` | string | Unique id for this update event |
| `timestamp` | Date | When the update occurred |

Indexes: unique on `updateId`; also on `objectId`, `clientName`, `timestamp`, and compound `(clientName, timestamp)`, `(objectId, timestamp)`.

## Quick start

```bash
npm install

# Smoke-test schema + CRUD with an in-memory MongoDB (no Docker needed)
npm run demo
```

### Local MongoDB (Docker)

```bash
cp .env.example .env
docker compose up -d          # or: npm run db:up
npm run seed                  # insert sample rows
npm run seed:wipe             # clear collection, then re-seed
```

Connection string (default):

```
mongodb://127.0.0.1:27017/abramson_local_work
```

Set `MONGODB_URI` in `.env` for Atlas or another host.

## Project layout

```
src/
  models/ClientUpdate.js   # Mongoose schema
  db/connect.js            # connection helpers
  db/clientUpdates.js      # create / query / delete helpers
  scripts/seed.js          # sample data loader
  scripts/demo.js          # in-memory end-to-end check
docker-compose.yml         # local MongoDB 7
```

## Example document

```json
{
  "_id": "6886f0a1c2b4e91a0f3d1234",
  "objectId": "obj-1001",
  "clientName": "Acme Corp",
  "update": "Contract terms revised",
  "updateId": "a3f1e2b0-9c4d-4e8a-b2f1-1234567890ab",
  "timestamp": "2026-07-15T14:30:00.000Z"
}
```

## Using the helpers

```js
import { connectDb } from "./src/db/connect.js";
import { createUpdate, findByClientName } from "./src/db/clientUpdates.js";

await connectDb();
await createUpdate({
  objectId: "obj-1001",
  clientName: "Acme Corp",
  update: "Follow-up scheduled",
  updateId: crypto.randomUUID(),
});
const rows = await findByClientName("Acme Corp");
```
