import { Theme } from "@/interface/Theme";

export const themes: { light: Theme; dark: Theme } | any = {
  light: {
    color: "text-dark",
    bgColor: "bg-light",
    bgMenue: "bg-dark",
    colorMenu: "text-light",
    BTNColor: "btn-outline-light",
    borderColor: "border-dark",
  },
  dark: {
    color: "text-light",
    bgColor: "bg-dark",
    bgMenue: "bg-light",
    colorMenu: "text-dark",
    BTNColor: "btn-outline-dark",
    borderColor: "border-light",
  },
};
