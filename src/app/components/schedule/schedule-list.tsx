"use client";
import { AppState } from "@/app/store/store";
import { useSelector } from "react-redux";
import ScheduleItem from "./schedule-item";
import { selectStudents } from "@/app/store/scheduleSlice";

function ScheduleList() {
  const students = useSelector(selectStudents);
  return (
    <>
      <div className="py-4">
        <div className="flex w-full items-center border-b border-gray-600 font-semibold h-14">
          <div className="flex-1">Student</div>
          <div className="flex-1">Subject</div>
          <div className="flex-1">Assigned Teacher</div>
        </div>
        {students.map((student) => (
          <ScheduleItem key={student.id} student={student}></ScheduleItem>
        ))}
      </div>
    </>
  );
}

export default ScheduleList;
