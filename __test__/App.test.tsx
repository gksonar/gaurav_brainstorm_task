import React from "react";
import { render, screen } from "@testing-library/react";
import App from "next/app";

describe("App component", () => {
  test('renders "Hello, World!"', () => {
    render(<App />);
    const helloWorldElement = screen.getByText(/Hello, World!/i);
    expect(helloWorldElement).toBeInTheDocument();
  });
});
