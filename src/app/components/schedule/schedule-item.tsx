function ScheduleItem({ student }: any) {
  return (
    <div
      className="flex w-full items-center border-b border-gray-400 h-14"
      data-testid={`schedule-item-${student.id}`}
    >
      <div className="flex-1" data-testid="student-name">{student.name}</div>
      <div className="flex-1" data-testid="student-subject">{student.subject}</div>
      <div className="flex-1" data-testid="student-teacher">{student.assignedTeacher}</div>
    </div>
  );
}

export default ScheduleItem;
