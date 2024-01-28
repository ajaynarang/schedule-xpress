import { studentsMockData } from "@/app/data/mock-data";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import ScheduleList from "../../components/schedule/schedule-list";

const mockStore = configureMockStore();
const initialState = {
  schedule: {
    students: [...studentsMockData],
  },
};
const store = mockStore(initialState);
store.clearActions();
describe("ScheduleList Component", () => {
  it("renders list headers", () => {
    render(
      <Provider store={store}>
        <ScheduleList />
      </Provider>
    );

    expect(screen.getByText("Student")).toBeInTheDocument();
    expect(screen.getByText("Subject")).toBeInTheDocument();
    expect(screen.getByText("Assigned Teacher")).toBeInTheDocument();
  });

  it("renders ScheduleItem for every teacher", () => {
    render(
      <Provider store={store}>
        <ScheduleList />
      </Provider>
    );

    const items = screen.getAllByTestId(/schedule-item/);
    expect(items).toHaveLength(initialState.schedule.students.length);
  });
});
