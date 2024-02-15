import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App component correctly", () => {
  render(<App />);

  // Example: Test if a specific text is present in the rendered component
  const headingElement = screen.getByText(/iTunes Search App/i);
  expect(headingElement).toBeInTheDocument();
});
