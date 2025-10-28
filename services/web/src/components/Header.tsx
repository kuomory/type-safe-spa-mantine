import { Group } from "@mantine/core";
import { Logo } from "./Logo";

export function Header() {
  return (
    <Group justify="space-between" pr="md">
      <Logo />
    </Group>
  );
}
