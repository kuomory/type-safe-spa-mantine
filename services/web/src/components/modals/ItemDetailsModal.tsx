import { Button, Divider, Group, Stack, Text } from "@mantine/core";
import type { ContextModalProps } from "@mantine/modals";
import type { Category, Item } from "@workspace/db";
import { useCallback } from "react";
import { CategoryLabel } from "../CategoryLabel";

export function ItemDetailsModal({
  context,
  id,
  innerProps: { item },
}: ContextModalProps<{
  item: Item & {
    Category: Category;
  };
}>) {
  const handleClose = useCallback(() => {
    context.closeContextModal(id);
  }, [context.closeContextModal, id]);
  return (
    <Stack component="form">
      <CategoryLabel category={item.Category} />
      <Text>{item.description}</Text>
      <Divider />
      <Group justify="end">
        <Button variant="outline" onClick={handleClose}>
          Close
        </Button>
      </Group>
    </Stack>
  );
}
