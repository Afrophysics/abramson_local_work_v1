import { ClientUpdate } from "../models/ClientUpdate.js";

/**
 * Create a single client update document.
 */
export async function createUpdate({
  objectId,
  clientName,
  update,
  updateId,
  timestamp,
}) {
  return ClientUpdate.create({
    objectId,
    clientName,
    update,
    updateId,
    timestamp: timestamp ? new Date(timestamp) : new Date(),
  });
}

/**
 * Insert many client updates (e.g. seed / bulk import).
 */
export async function createManyUpdates(docs) {
  return ClientUpdate.insertMany(docs, { ordered: false });
}

/**
 * Find updates by client name, newest first.
 */
export async function findByClientName(clientName, { limit = 50 } = {}) {
  return ClientUpdate.find({ clientName })
    .sort({ timestamp: -1 })
    .limit(limit)
    .lean();
}

/**
 * Find updates for a given business object ID, newest first.
 */
export async function findByObjectId(objectId, { limit = 50 } = {}) {
  return ClientUpdate.find({ objectId })
    .sort({ timestamp: -1 })
    .limit(limit)
    .lean();
}

/**
 * Find a single update by its updateId.
 */
export async function findByUpdateId(updateId) {
  return ClientUpdate.findOne({ updateId }).lean();
}

/**
 * List recent updates across all clients.
 */
export async function listRecent({ limit = 50 } = {}) {
  return ClientUpdate.find()
    .sort({ timestamp: -1 })
    .limit(limit)
    .lean();
}

/**
 * Delete by updateId. Returns whether a document was removed.
 */
export async function deleteByUpdateId(updateId) {
  const result = await ClientUpdate.deleteOne({ updateId });
  return result.deletedCount === 1;
}
