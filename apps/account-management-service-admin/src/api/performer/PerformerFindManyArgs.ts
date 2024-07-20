import { PerformerWhereInput } from "./PerformerWhereInput";
import { PerformerOrderByInput } from "./PerformerOrderByInput";

export type PerformerFindManyArgs = {
  where?: PerformerWhereInput;
  orderBy?: Array<PerformerOrderByInput>;
  skip?: number;
  take?: number;
};
