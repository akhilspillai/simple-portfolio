import { render } from "@testing-library/react";
import About, { ABOUT } from "./About";

test("renders about me text", () => {
  const { getByText } = render(<About />);
  const linkElement = getByText(/industry experience/i);
  expect(linkElement.innerHTML).toBe(ABOUT);
});
