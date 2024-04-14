import { atom } from "jotai";
import { userType } from "./types";

export const userState = atom<userType>({
  id: "",
  name: "",
  amount: 0,
  currency: "",
  wallet: "",
  nftCollections: [],
});

export const applicationState = atom((get) => {
  const user = get(userState);
  const isSideBarOpen = get(sidebarState);
  return {
    isLoggedIn: user.id !== "",
    user: user,
    isSideBarOpen: isSideBarOpen,
  };
});

export const sidebarState = atom(false);
