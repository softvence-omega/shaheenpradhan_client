const initialOptions = [
  "Scheduling",
  "Inbox Management", 
  "All-round EA",
  "Travel Planning",
  "Expense Tracking",
  "Event Coordination",
  "Personal Admin Support",
  "Presentations And Documents",
  "Project Support",
];

const ServiceSelectionStep = ({ 
  selectedService, 
  onServiceSelect, 
  onNext, 
  onCancel 
}) => {
  const canProceed = () => selectedService !== "";

  return (
    <div className="bg-white rounded-lg shadow p-5">
      <div className="w-1/3 h-1.5 bg-purple-400 rounded mb-5"></div>
      
      <h3 className="text-sm md:text-lg font-semibold mb-4">
        What kind of help do you need right now?
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        {initialOptions.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onServiceSelect(opt)}
            className={`px-2 md:px-3 py-1 md:py-2 rounded-md border text-sm md:font-medium transition cursor-pointer
              ${selectedService === opt
                ? "bg-purple-100 border-purple-500 text-purple-700"
                : "bg-white border-gray-300 hover:border-purple-400"
              }`}
          >
            {opt}
          </button>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          onClick={onCancel}
          className="px-4 py-2 rounded-md border bg-gray-50 text-gray-700 cursor-pointer"
        >
          Cancel
        </button>
        <button
          onClick={onNext}
          disabled={!canProceed()}
          className={`px-4 py-2 rounded-md text-white cursor-pointer 
            ${canProceed()
              ? "bg-purple-600 hover:bg-purple-700"
              : "bg-purple-300 cursor-not-allowed"
            }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ServiceSelectionStep;