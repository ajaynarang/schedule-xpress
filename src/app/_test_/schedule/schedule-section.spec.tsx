import { studentsMockData } from "@/app/data/mock-data";
import { render, screen, within } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import ScheduleSection from "../../components/schedule/schedule-section";

const mockStore = configureMockStore();
const initialState = {
  schedule: {
    students: [...studentsMockData],
  },
};
const store = mockStore(initialState);
store.clearActions();

describe("ScheduleSection Component", () => {
  it("renders header", () => {
    render(
      <Provider store={store}>
        <ScheduleSection></ScheduleSection>
      </Provider>
    );
    const section = screen.getByTestId("schedule-section-title");
    const title = within(section).getByText("Current Schedule");
    expect(title).toBeInTheDocument();
  });
});
