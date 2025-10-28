import { Group, Paper, Stack, Text, UnstyledButton } from "@mantine/core";
import { openContextModal } from "@mantine/modals";
import type { Category, Item } from "@workspace/db";
import { formatDistance } from "date-fns";
import { ja } from "date-fns/locale/ja";
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
          <Group justify="space-between">
            <CategoryLabel category={item.Category} />
            <Text size="sm" c="gray">
              {formatDistance(item.updatedAt, Date.now(), {
                locale: ja,
                addSuffix: true,
              })}
            </Text>
          </Group>
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
