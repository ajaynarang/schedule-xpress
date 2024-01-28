import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { Teacher } from "../models/teacher";
import { Student } from "../models/student";
import { studentsMockData, teachersMockData } from "../data/mock-data";

interface ScheduleState {
  teachers: Teacher[];
  students: Student[];
}

const initialState: ScheduleState = {
  teachers: teachersMockData,
  students: studentsMockData,
};

const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    updateTeacherAttendance: (
      state,
      action: PayloadAction<{ teacherId: number; attendance: string }>
    ) => {
      const { teacherId, attendance } = action.payload;
      const teacher = state.teachers.find((t) => t.id === teacherId);
      if (teacher) {
        teacher.attendance = attendance;
        state.students.forEach((student: Student) => {
          const availableTeacher = findAvailableTeacher(
            state.teachers,
            student
          );
          student.assignedTeacher = availableTeacher?.name || "Not Assigned";
        });
      }
    },

    autoAssignTeacher: (state, action: Action) => {
      const students = state.students.filter((s) => !s.assignedTeacher);
      students.forEach((student: Student) => {
        const availableTeacher = findAvailableTeacher(state.teachers, student);
        student.assignedTeacher = availableTeacher?.name || "Not Assigned";
      });
    },

    reset: (state, action: Action) => {
      return initialState;
    },
  },
});

const findAvailableTeacher = (
  teachers: Teacher[],
  student: Student
): Teacher | null => {
  const levelsForMatchingSubjects = teachers
    .filter((t) => t.subjects?.some((s) => s == student.subject))
    .map((t) => t.level);

  //get the max level for teachers for provided student's subject
  const maxLevel = Math.max(...levelsForMatchingSubjects);

  //get the present standby teachers (one level less than max) for provided student's subject or allocated teacher if available
  const availableTeachers = teachers.filter(
    (t) =>
      (t.attendance === "present" &&
        t.subjects?.some((s) => s == student.subject) &&
        t.level < maxLevel) ||
      (t.attendance == "present" && t.name == student.defaultAllocation)
  );

  const highestLevelTeacher = availableTeachers.reduce(
    (prev: Teacher | null, current: Teacher) =>
      prev && prev.level > current.level ? prev : current,
    null
  );
  return highestLevelTeacher;
};

export const { updateTeacherAttendance, autoAssignTeacher, reset } =
  scheduleSlice.actions;
export const initialScheduleState = initialState;
export const selectSchedule = (state: AppState) => state.schedule;
export const selectTeachers = (state: AppState) => state.schedule.teachers;
export const selectStudents = (state: AppState) => state.schedule.students;
export default scheduleSlice.reducer;
