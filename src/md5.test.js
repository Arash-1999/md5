import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Md5 from "./md5.js";

let pad, len, init, process;

it("result is processed correctly", async () => {
  render(<Md5 />);

  userEvent.type(screen.getByText(/your string/i), "The quick brown fox jumps over the lazy dog.");
  userEvent.click(screen.getByRole("button", {name: /start/i}));

  //
  pad = screen.getByRole("button", {name: /padding/i});
  userEvent.click(pad);

  len = screen.getByRole("button", {name: /length/i});
  userEvent.click(len);

  expect(screen.getByText("352")).toBeTruthy();
  expect(screen.getByText("95")).toBeTruthy();

  init = await screen.findByRole("button", {name: /buffer/i});
  userEvent.click(init);

  process = await screen.findByRole("button", {name: /process/i});
  userEvent.click(process);

  expect(await screen.findByText("e4d909c290d0fb1ca068ffaddf22cbd0")).toBeTruthy();

  cleanup();
});
