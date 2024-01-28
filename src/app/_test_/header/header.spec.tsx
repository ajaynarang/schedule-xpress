import Header from "@/app/layout/header";
import { render, screen } from "@testing-library/react";

describe("Header Component", () => {
  it("renders header", () => {
    render(<Header></Header>);
    const appTitle = screen.getByTestId("app-title");
    expect(appTitle).toHaveTextContent("ScheduleXpress");
  });
});
