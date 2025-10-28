import { Paper, Stack, Text, UnstyledButton } from "@mantine/core";
import { openContextModal } from "@mantine/modals";
import type { Category, Item } from "@workspace/db";
import { useCallback } from "react";
import { CategoryLabel } from "./CategoryLabel";
import type { ContextModal } from "./modals";

type Props = {
  item: Item & { Category: Category };
};

export function ItemCard(props: Props) {
  const { item } = props;
  const handleClick = useCallback(() => {
    openContextModal<ContextModal>({
      modal: "ItemDetails",
      title: item.name,
      innerProps: { item },
    });
  }, [item]);
  return (
    <UnstyledButton key={item.key} display="grid" onClick={handleClick}>
      <Paper withBorder shadow="md" p="sm">
        <Stack gap="xs">
          <CategoryLabel category={item.Category} />
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
