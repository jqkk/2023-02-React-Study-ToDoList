import { createTheme } from "@kuma-ui/core";

const theme = createTheme({
  colors: {
    red: "rgb(239 68 68)",
    blue: "rgb(59 130 246)",
    green: "rgb(34 197 94)",
    yellow: "rgb(234 179 8)",
  },
});

type UserTheme = typeof theme;

declare module "@kuma-ui/core" {
  export interface Theme extends UserTheme {}
}

export default theme;
