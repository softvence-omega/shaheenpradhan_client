type DialogCancelBookingProps = {
  isOpen: boolean;
  onClose: () => void;
  bookingId: string;
};

const DialogCancelBooking = ({
  isOpen,
  onClose,
  bookingId,
}: DialogCancelBookingProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-white/10 backdrop-blur-[1px] transition-opacity duration-100">
      <div className="bg-white p-6 w-[512px] space-y-5 rounded-xl shadow-2xl">
        <div className="text-start">
          <h1 className="text-xl font-semibold text-gray-900">
            Confirm Cancellation
          </h1>
        </div>

        <div className="text-gray-700">
          <p>
            Are you sure you want to cancel this booking for{" "}
            <span className="font-medium text-gray-900">#{bookingId}</span>?
          </p>
        </div>

        <div className="text-red-700">
          <p>
            A cancellation fee of 20% ($40.00) of the booking price may be
            charged if canceled now.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-5 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-white transition cursor-pointer"
          >
            Keep Booking
          </button>
          <button
            onClick={() => {
              alert(`Booking #${bookingId} cancelled`);
              onClose();
            }}
            className="px-4 py-2 bg-[#FF4040] text-white rounded-lg hover:bg-red-600 transition cursor-pointer"
          >
            Cancel Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogCancelBooking;
