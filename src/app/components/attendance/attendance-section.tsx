"use client";
import { autoAssignTeacher, reset } from "@/app/store/scheduleSlice";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import AttendanceList from "./attendance-list";

function AttendanceSection() {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(reset());
  };

  const autoAssign = () => {
    dispatch(autoAssignTeacher());
  };
  return (
    <>
      <div className="flex w-full justify-between">
        <h2
          className="text-xl font-bold mb-4"
          data-testid="attendance-section-title"
        >
          Attendance
        </h2>
        <div>
          <Button
            data-testid="auto-assign-button"
            className="mr-2"
            variant="outlined"
            onClick={autoAssign}
          >
            Auto Assign
          </Button>
          <Button
            data-testid="reset-button"
            variant="outlined"
            onClick={handleReset}
          >
            Reset
          </Button>
        </div>
      </div>

      <AttendanceList></AttendanceList>
    </>
  );
}

export default AttendanceSection;
