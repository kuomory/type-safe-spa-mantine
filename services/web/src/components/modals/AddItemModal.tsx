import {
  Button,
  Divider,
  Group,
  Select,
  Stack,
  Textarea,
  TextInput,
} from "@mantine/core";
import type { ContextModalProps } from "@mantine/modals";
import { IconPlus } from "@tabler/icons-react";
import { useCallback } from "react";

export function AddItemModal({
  context,
  id,
}: ContextModalProps<Record<string, never>>) {
  const categories = ["a"];
  const handleClose = useCallback(() => {
    context.closeContextModal(id);
  }, [context.closeContextModal, id]);
  return (
    <Stack component="form">
      <TextInput label="Name" />
      <Select label="Category" data={categories} />
      <Textarea label="Description" />
      <Divider />
      <Group justify="end">
        <Button leftSection={<IconPlus />}>Add</Button>
        <Button variant="outline" onClick={handleClose}>
          Close
        </Button>
      </Group>
    </Stack>
  );
}
