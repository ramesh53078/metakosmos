import { createContext } from "react";

export const backgroundColors = {
  dark : "dark",
  primary: "primary",
  blue: "blue",
  green: "green",
};

export const BackgroundColorContext = createContext({
  color: backgroundColors.dark,
  changeColor: (color) => {},
});
