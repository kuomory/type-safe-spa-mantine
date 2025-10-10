import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  migrations: {
    seed: "dotenv -e ../../.env -- tsx ./prisma/seed/index.ts",
  },
});
