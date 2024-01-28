import { selectTeachers, updateTeacherAttendance } from "@/app/store/scheduleSlice";
import { AppState } from "@/app/store/store";
import { useDispatch, useSelector } from "react-redux";
import AttendanceItem from "./attendance-item";

function AttendanceList() {
  const teachers = useSelector(selectTeachers);
  const dispatch = useDispatch();

  const handleAttendance = (teacherId: number, attendance: string) => {
    dispatch(updateTeacherAttendance({ teacherId, attendance }));
  };

  return (
    <div className="py-4" data-testid="attendance-list">
      <div className="flex w-full items-center border-b border-gray-600 font-semibold h-14">
        <div className="flex-1">Teacher</div>
        <div className="flex-1">Attendance</div>
      </div>
      {teachers.map((teacher) => (
        <AttendanceItem
          key={teacher.id}
          teacher={teacher}
          handleAttendance={handleAttendance}
        ></AttendanceItem>
      ))}
    </div>
  );
}

export default AttendanceList;
