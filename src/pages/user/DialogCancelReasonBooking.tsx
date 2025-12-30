const DialogCancelReasonBooking = () => {
  return (
    <div className="mx-auto bg-white shadow-md rounded-lg p-6 w-[512px] h-[379px] space-y-3 ">
      <div className="text-start ">
        <h1 className=" font-medium text-[18px]  text-gray-800 ">
          Are you sure you want to cancel the booking?
        </h1>
      </div>
      <div className="mb-3">
        <div className="space-y-4">
          <label className="text-lg font-semibold text-[#4D4D4D] mb-1">
            Reason
          </label>

          <textarea
            id="cancellationReason"
            className="w-full h-28 border border-gray-300 bg-white rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2  transition duration-200"
            rows={4}
            placeholder="Explain why you want to cancel the booking..."
          />
        </div>

        <p className="text-xs text-gray-400 mt-1">1000 characters left</p>
      </div>
      <div>
        <p className="w-[400px] h-[68px] text-[#FF4040]">
          A cancellation fee of 20% ($40.00) of the booking price may be charged
          if canceled now.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-end gap-4 ">
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-white cursor-pointer">
          Keep Booking
        </button>
        <button className="px-4 py-2 bg-[#FF4040] text-white rounded-lg hover:bg-purple-700 cursor-pointer">
          Cancel Booking
        </button>
      </div>
    </div>
  );
};

export default DialogCancelReasonBooking;
