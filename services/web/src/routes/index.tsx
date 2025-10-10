import {
  Button,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Title,
} from "@mantine/core";
import { openContextModal } from "@mantine/modals";
import { IconPlus } from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { useCallback } from "react";
import { ItemCard } from "../components/ItemCard";
import type { ContextModal } from "../components/modals";

export const Route = createFileRoute("/")({
  component: RouteComponent,
  loader: async ({ context: { trpc } }) => await trpc.items.list.query(),
});

function RouteComponent() {
  const items = Route.useLoaderData();
  const handleClick = useCallback(() => {
    openContextModal<ContextModal>({
      modal: "AddItem",
      title: "Add item",
      innerProps: {},
    });
  }, []);
  return (
    <Container p="md">
      <Stack>
        <Group justify="space-between">
          <Title>Items</Title>
          <Button
            type="button"
            leftSection={<IconPlus />}
            onClick={handleClick}
          >
            Add
          </Button>
        </Group>
        <SimpleGrid cols={3}>
          {items.map((item) => (
            <ItemCard key={item.key} item={item} />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
