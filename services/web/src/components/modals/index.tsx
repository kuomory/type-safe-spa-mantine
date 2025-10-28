import { AddItemModal } from "./AddItemModal";
import { ItemDetailsModal } from "./ItemDetailsModal";

export const contextModals = {
  AddItem: AddItemModal,
  ItemDetails: ItemDetailsModal,
};

export type ContextModal = keyof typeof contextModals;

declare module "@mantine/modals" {
  export interface MantineModalsOverride {
    modals: typeof contextModals;
  }
}
