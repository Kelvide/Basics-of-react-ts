import { create } from "zustand";

export interface UserInterface {
    id: number,
    name: string,
    email: string,
    phone: string,
}

export const userStore = create<{
    allUsers: UserInterface[];
    setAllUsers: (user: UserInterface[]) => void;
}>((set) => ({
    allUsers: [],
    setAllUsers: (user) => set({ allUsers: user }),
}))