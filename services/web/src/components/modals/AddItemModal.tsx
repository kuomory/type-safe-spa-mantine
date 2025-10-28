import { zodResolver } from "@hookform/resolvers/zod";
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
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";
import { useCallback } from "react";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import { trpc } from "../../trpc";

const formValues = z.object({
  name: z.string().min(1),
  category: z.string().min(1),
  description: z.string(),
});
type FormValues = z.infer<typeof formValues>;

export function AddItemModal({
  context,
  id,
}: ContextModalProps<Record<string, never>>) {
  const router = useRouter();
  const handleClose = useCallback(() => {
    context.closeContextModal(id);
  }, [context.closeContextModal, id]);
  const { data: categories, isLoading } = useQuery(
    trpc.categories.list.queryOptions(),
  );
  const itemCreator = useMutation(
    trpc.items.add.mutationOptions({
      onSuccess: () => {
        router.invalidate();
        handleClose();
      },
    }),
  );
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formValues),
  });
  const onValid: SubmitHandler<FormValues> = useCallback(
    (data) => {
      itemCreator.mutate({
        name: data.name,
        categoryKey: data.category,
        description: data.description || undefined,
      });
    },
    [itemCreator.mutate],
  );
  if (isLoading) return <Loader />;
  return (
    <Stack component="form" onSubmit={handleSubmit(onValid)}>
      <TextInput
        {...register("name")}
        label="Name"
        error={errors.name?.message}
      />
      <Controller
        name="category"
        control={control}
        render={({ field: { value, onChange, onBlur } }) => (
          <Select
            label="Category"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            data={categories?.map((cat) => ({
              label: cat.name,
              value: cat.key,
            }))}
            error={errors.category?.message}
          />
        )}
      />
      <Textarea
        {...register("description")}
        label="Description"
        error={errors.description?.message}
      />
      <Divider />
      <Group justify="end">
        <Button type="submit" leftSection={<IconPlus />}>
          Add
        </Button>
        <Button type="button" variant="outline" onClick={handleClose}>
          Close
        </Button>
      </Group>
    </Stack>
  );
}
