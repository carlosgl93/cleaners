import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders navbar", () => {
  render(<App />);
  const navLinks = screen.findAllByRole("listitem");
  expect(navLinks).toBeDefined();
});
