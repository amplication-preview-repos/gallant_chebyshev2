import { SortOrder } from "../../util/SortOrder";

export type PerformerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
};
