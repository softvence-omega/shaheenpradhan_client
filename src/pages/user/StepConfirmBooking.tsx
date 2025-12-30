import StepBooking from "@/components/user/Shared/StepBooking";

const StepConfirmBooking = () => {
  return (
    <div>
      <StepBooking steps={[{ completed: false }]} />
    </div>
  );
};

export default StepConfirmBooking;
