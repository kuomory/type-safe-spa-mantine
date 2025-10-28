import { Text } from "@mantine/core";
import type { Category } from "@workspace/db";

type Props = {
  category: Category;
};

export function CategoryLabel(props: Props) {
  const { category } = props;
  return (
    <Text size="sm" bg="indigo" c="white" w="fit-content" p="4 12">
      {category.name}
    </Text>
  );
}
