const DialogBookingConfirmation = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="mx-auto bg-white shadow-md rounded-lg p-6 w-[666px]">
        <div className="text-start mb-6">
          <h1 className="text-[28px] font-medium leading-[1.2] tracking-[0.84px] text-gray-800 mb-2">
            Your Request of booking with Jessamine Mumtaz has been successfully
            placed.
          </h1>
          <p className="text-gray-600">
            The assistant has been notified and will be in touch if needed. You
            will receive an email confirmation shortly.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
          <button
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-white cursor-pointer"
            onClick={onClose}
          >
            View Details
          </button>
          <button
            className="px-4 py-2 bg-[#B655DA] text-white rounded-lg hover:bg-purple-700"
            onClick={onClose}
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogBookingConfirmation;
