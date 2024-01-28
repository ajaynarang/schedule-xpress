"use client";
import AttendanceSection from "@/app/components/attendance/attendance-section";
import ScheduleSection from "@/app/components/schedule/schedule-section";
import { store } from "@/app/store/store";
import { Provider } from "react-redux";

export default function Scheduler() {
  return (
    <>
      <Provider store={store}>
        <div className="flex flex-col lg:flex-row w-full h-screen">
          <div className="w-full lg:w-1/2 p-4 border-r border-gray-400">
            <AttendanceSection></AttendanceSection>
          </div>
          <div className="w-full lg:w-1/2  p-4">
            <ScheduleSection></ScheduleSection>
          </div>
        </div>
      </Provider>
    </>
  );
}
