import { db } from "../db";

async function main() {
  await db.category.create({
    data: {
      name: "Category 1",
      items: {
        createMany: {
          data: [
            {
              name: "Item A",
              description: "This is A.",
            },
            {
              name: "Item B",
            },
          ],
        },
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
