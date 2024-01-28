import { teachersMockData } from "@/app/data/mock-data";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import AttendanceSection from "../../components/attendance/attendance-section";
import AttendanceList from "@/app/components/attendance/attendance-list";
import { autoAssignTeacher, reset } from "@/app/store/scheduleSlice";

const mockStore = configureMockStore();
const initialState = {
  schedule: {
    teachers: [...teachersMockData],
  },
};
const store = mockStore(initialState);

describe("AttendanceSection Component", () => {
  beforeEach(() => {
    store.clearActions();
  });
  
  it("renders header", () => {
    render(
      <Provider store={store}>
        <AttendanceSection></AttendanceSection>
      </Provider>
    );
    const section = screen.getByTestId("attendance-section-title");
    const title = within(section).getByText("Attendance");
    expect(title).toBeInTheDocument();
  });

  it("call autoAssignTeacher action on auto assign button click", () => {
    render(
      <Provider store={store}>
        <AttendanceSection />
      </Provider>
    );

    const autoAssignButton = screen.getByTestId("auto-assign-button");
    fireEvent.click(autoAssignButton);

    const actions = store.getActions();

    console.log(actions);
    expect(actions).toEqual([
      {
        type: autoAssignTeacher.type,
      },
    ]);
  });

  it("call reset action on reset button click", () => {
    render(
      <Provider store={store}>
        <AttendanceSection />
      </Provider>
    );

    const autoAssignButton = screen.getByTestId("reset-button");
    fireEvent.click(autoAssignButton);

    const actions = store.getActions();

    console.log(actions);
    expect(actions).toEqual([
      {
        type: reset.type,
      },
    ]);
  });
});
