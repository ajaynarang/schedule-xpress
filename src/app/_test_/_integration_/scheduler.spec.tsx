import Scheduler from "@/app/(features)/scheduler/page";
import { studentsMockData, teachersMockData } from "@/app/data/mock-data";
import { render, screen, waitFor, within } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { markTeacherAbsent } from "../util/util";
// import { store } from "@/app/store/store";

const mockStore = configureMockStore();
const initialState = {
  schedule: {
    students: [...studentsMockData],
    teachers: [...teachersMockData],
  },
};
const store = mockStore(initialState);
store.clearActions();

describe("Scheduler Feature", () => {
  it.only("should change assigned teacher when teacher is marked absent ", async () => {
    render(
      <Provider store={store}>
        <Scheduler></Scheduler>
      </Provider>
    );
    const mockTeacherId = 4;
    markTeacherAbsent(mockTeacherId);

    await waitFor(() => {
      const mockStudentId = 4;
      const studentItem = screen.getByTestId(`schedule-item-${mockStudentId}`);
      const teacher = within(studentItem).getByTestId("student-teacher");
      expect(teacher).toHaveTextContent("Rubeus Hagrid");
    });
  });
});
