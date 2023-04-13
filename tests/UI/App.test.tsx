import { render, screen } from "@testing-library/react";

import App from "@ui/App";

describe("App Component", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("renders hello text", () => {
    render(<App />);
    const headingElement = screen.getByText(/hello from/i);
    expect(headingElement).toBeInTheDocument();
  });
});
