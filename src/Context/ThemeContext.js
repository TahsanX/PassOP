import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  theme: true,
  toggle: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
