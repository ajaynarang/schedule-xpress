import { fireEvent, render, screen } from "@testing-library/react";
import AttendanceItem from "../../components/attendance/attendance-item";

const mockTeacher = {
  id: 1,
  name: "Professor Dumbledore",
  attendance: "present",
};

describe("AttendanceItem Component", () => {
  const mockHandleAttendance = jest.fn();
  it("renders teacher detail", () => {
    render(
      <AttendanceItem
        teacher={mockTeacher}
        handleAttendance={mockHandleAttendance}
      />
    );

    expect(screen.getByText("Professor Dumbledore")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("calls handleAttendance method when attendance changes", async () => {
    render(
      <AttendanceItem
        teacher={mockTeacher}
        handleAttendance={mockHandleAttendance}
      />
    );
    const selectElement = screen.getByRole("combobox");
    fireEvent.mouseDown(selectElement);
    const absentOption = screen.getByText("Absent");
    fireEvent.click(absentOption);
    //console.log(absentOption);
    expect(mockHandleAttendance).toHaveBeenCalledWith(1, "absent");
  });
});
