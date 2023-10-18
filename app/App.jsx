"use client";

import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 600,
      lg: 900,
      xl: 1200,
    },
  },
});
export const App = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
