import { Performer as TPerformer } from "../api/performer/Performer";

export const PERFORMER_TITLE_FIELD = "name";

export const PerformerTitle = (record: TPerformer): string => {
  return record.name?.toString() || String(record.id);
};
