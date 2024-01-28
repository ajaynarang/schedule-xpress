import { teachersMockData } from "@/app/data/mock-data";
import { updateTeacherAttendance } from "@/app/store/scheduleSlice";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import AttendanceList from "../../components/attendance/attendance-list";
import { markTeacherAbsent } from "../util/util";

const mockStore = configureMockStore();
const initialState = {
  schedule: {
    teachers: [...teachersMockData],
  },
};
const store = mockStore(initialState);

store.clearActions();
describe("AttendanceList Component", () => {
  it("renders list headers", () => {
    render(
      <Provider store={store}>
        <AttendanceList />
      </Provider>
    );

    expect(screen.getByText("Teacher")).toBeInTheDocument();
    expect(screen.getByText("Attendance")).toBeInTheDocument();
  });

  it("renders AttendanceItem for every teacher", () => {
    render(
      <Provider store={store}>
        <AttendanceList />
      </Provider>
    );

    const items = screen.getAllByTestId(/attendance-item-/);
    expect(items).toHaveLength(initialState.schedule.teachers.length);
  });

  it("call updateTeacherAttendance action on attendance change", () => {
    render(
      <Provider store={store}>
        <AttendanceList />
      </Provider>
    );

    const mockTeacherId = 4;
    markTeacherAbsent(mockTeacherId);
    const actions = store.getActions();

    expect(actions).toEqual([
      {
        type: updateTeacherAttendance.type,
        payload: { teacherId: mockTeacherId, attendance: "absent" },
      },
    ]);
  });
});
