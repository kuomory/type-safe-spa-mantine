import { router } from "../../trpc";
import { add } from "./add";
import { list } from "./list";

export const items = router({
  list,
  add,
});
