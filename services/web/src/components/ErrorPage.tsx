import { AppShell, Container, Stack, Text, Title } from "@mantine/core";
import type { ErrorRouteComponent } from "@tanstack/react-router";
import { Header } from "./Header";

export const ErrorPage: ErrorRouteComponent = ({ error }) => {
  console.error(error);
  return (
    <AppShell header={{ height: 60 }}>
      <Container p="md">
        <AppShell header={{ height: 60 }}>
          <AppShell.Header display="grid">
            <Header />
          </AppShell.Header>
          <AppShell.Main>
            <Stack>
              <Title c="pink">問題が発生しました</Title>
              <Text>アプリに問題が発生しました。</Text>
            </Stack>
          </AppShell.Main>
        </AppShell>
      </Container>
    </AppShell>
  );
};
