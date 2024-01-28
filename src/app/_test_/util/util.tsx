import { fireEvent, screen, within } from "@testing-library/react";

export function markTeacherAbsent(teacherId: number) {
  const attendanceItem = screen.getByTestId(`attendance-item-${teacherId}`);

  const selectElement = within(attendanceItem).getAllByRole("combobox");
  fireEvent.mouseDown(selectElement[0]);

  const absentOption = screen.getByTestId("absent-option");
  fireEvent.click(absentOption);
}
