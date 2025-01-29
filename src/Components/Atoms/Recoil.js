import { atom } from "recoil";

export const isContactMe = atom({
  key: "isContactMe",
  default: false,
});

export const isBlog = atom({
  key: "isBlog",
  default: false,
});
