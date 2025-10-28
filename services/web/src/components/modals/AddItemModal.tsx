import {
  Button,
  Divider,
  Group,
  Loader,
  Select,
  Stack,
  Textarea,
  TextInput,
} from "@mantine/core";
import type { ContextModalProps } from "@mantine/modals";
import { IconPlus } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { trpc } from "../../trpc";

export function AddItemModal({
  context,
  id,
}: ContextModalProps<Record<string, never>>) {
  const { data: categories, isLoading } = useQuery(
    trpc.categories.list.queryOptions(),
  );
  const handleClose = useCallback(() => {
    context.closeContextModal(id);
  }, [context.closeContextModal, id]);
  return isLoading ? (
    <Loader />
  ) : (
    <Stack component="form">
      <TextInput label="Name" />
      <Select label="Category" data={categories?.map((cat) => cat.name)} />
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
