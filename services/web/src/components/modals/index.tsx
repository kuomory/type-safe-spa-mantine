import { AddItemModal } from "./AddItemModal";

export const contextModals = {
  AddItem: AddItemModal,
};

export type ContextModal = keyof typeof contextModals;

declare module "@mantine/modals" {
  export interface MantineModalsOverride {
    modals: typeof contextModals;
  }
}
