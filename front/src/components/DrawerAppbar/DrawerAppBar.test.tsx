import React from "react";
import { render, screen } from "@testing-library/react";
import { DrawerAppBar } from "./DrawerAppBar";

test("navbar links", async () => {
  render(<DrawerAppBar />);
  const text = screen.getAllByText("Como funciona?");

  expect(text);
});
