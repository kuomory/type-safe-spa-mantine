import { router } from "../../trpc";
import { list } from "./list";

export const categories = router({
  list,
});
