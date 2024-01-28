import ScheduleList from "./schedule-list";

function ScheduleSection() {
  return (
    <>
      <h2
        className="text-xl font-bold mb-4"
        data-testid="schedule-section-title"
      >
        Current Schedule
      </h2>
      <ScheduleList></ScheduleList>
    </>
  );
}

export default ScheduleSection;
