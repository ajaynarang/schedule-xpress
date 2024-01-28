import { render, screen } from "@testing-library/react";
import ScheduleItem from "../../components/schedule/schedule-item";
import { studentsMockData } from "@/app/data/mock-data";

const mockStudent = studentsMockData[0];

describe("ScheduleItem Component", () => {
  it("renders teacher detail", () => {
    render(<ScheduleItem student={mockStudent} key={mockStudent.id} />);

    expect(screen.getByText("Harry Potter")).toBeInTheDocument();
    expect(screen.getByText("Potions Master")).toBeInTheDocument();
    expect(screen.getByText("Horace Slughorn")).toBeInTheDocument();
  });
});
