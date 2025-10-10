import { Paper, Stack, Text, UnstyledButton } from "@mantine/core";
import type { Category, Item } from "@workspace/api/generated/prisma/client";
import { useCallback } from "react";

type Props = {
  item: Item & { Category: Category };
};

export function ItemCard(props: Props) {
  const { item } = props;
  const handleClick = useCallback(() => {
    // openContextModal<ContextModal>({
    // });
  }, []);
  return (
    <UnstyledButton key={item.key} display="grid" onClick={handleClick}>
      <Paper withBorder shadow="md" p="sm">
        <Stack gap="xs">
          <Text size="sm" bg="indigo" c="white" w="fit-content" p="4 12">
            {item.Category.name}
          </Text>
          <Text size="xl" fw="bold">
            {item.name}
          </Text>
          <Text size="sm" lineClamp={1}>
            {item.description}
          </Text>
        </Stack>
      </Paper>
    </UnstyledButton>
  );
}
