import { atom } from "recoil";

export const isContactMe = atom({
  key: "isContactMe",
  default: false,
});

export const isBlog = atom({
  key: "isBlog",
  default: false,
});


export const isDrawerOpen = atom({
  key: "isDrawerOpen",
  default: false,
});

export const isDashboardOpen = atom({
  key: "isDashboardOpen",
  default: false,
});