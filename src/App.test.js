import { render, screen } from "@testing-library/react";

import App from "./App.js";

it("app renders the form", () => {
  render(<App />);

  const startBtn = screen.getByText(/start/i);
  
  expect(startBtn).toBeTruthy();
});
