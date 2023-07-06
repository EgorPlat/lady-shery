import { createEvent, createStore } from "effector";

export const setIsSearchModalOpen = createEvent<boolean>();
export const isSearchModalOpen = createStore<boolean>(false).on(setIsSearchModalOpen, (_, newStatus) => {
    return newStatus;
});