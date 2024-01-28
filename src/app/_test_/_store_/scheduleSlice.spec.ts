// scheduleSlice.test.ts

import { studentsMockData, teachersMockData } from "@/app/data/mock-data";
import {
  initialScheduleState,
  updateTeacherAttendance,
  autoAssignTeacher,
  reset,
} from "../../store/scheduleSlice";

import scheduleReducer from "../../store/scheduleSlice";

describe("scheduleSlice reducers", () => {
  it("should handle updateTeacherAttendance action correctly", () => {
    const nextState = scheduleReducer(
      initialScheduleState,
      updateTeacherAttendance({ teacherId: 4, attendance: "absent" })
    );
    const teacher = nextState.teachers.find((t) => t.id == 4);
    expect(teacher?.attendance).toEqual("absent");

    const student = nextState.students.find((s) => s.id == 4);
    expect(student?.assignedTeacher).toEqual("Rubeus Hagrid");
  });

  it("should handle autoAssignTeacher action correctly", () => {
    const nextState = scheduleReducer(
      initialScheduleState,
      autoAssignTeacher()
    );

    //no student should have assigned teacher to be blank
    expect(nextState.students.some((s) => s.assignedTeacher == "")).toBeFalsy();
  });

  it("should handle reset action correctly", () => {
    //tweak state 
    let nextState = scheduleReducer(
      initialScheduleState,
      updateTeacherAttendance({ teacherId: 4, attendance: "absent" })
    );

    nextState = scheduleReducer(nextState, reset());

    //should match the initial state
    expect(nextState).toEqual(initialScheduleState);
  });
});
