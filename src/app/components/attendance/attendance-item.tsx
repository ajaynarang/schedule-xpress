import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function AttendanceItem({ teacher, handleAttendance }: any) {
  return (
    <div
      className="flex w-full items-center border-b border-gray-400 h-14"
      data-testid={`attendance-item-${teacher.id}`}
    >
      <span className="flex-1">{teacher.name}</span>

      <div className="flex-1">
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <Select
            value={teacher.attendance}
            onChange={(event) => {
              handleAttendance(teacher.id, event.target.value);
            }}
          >
            <MenuItem value="present" data-testid="present-option">
              Present
            </MenuItem>
            <MenuItem value="absent" data-testid="absent-option">
              Absent
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default AttendanceItem;
