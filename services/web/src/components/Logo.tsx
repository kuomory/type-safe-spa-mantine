import { Text } from "@mantine/core";
import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <Text
        variant="gradient"
        gradient={{ from: "blue", to: "grape" }}
        size="xl"
        px="lg"
        py="sm"
      >
        AppLogo
      </Text>
    </Link>
  );
}
