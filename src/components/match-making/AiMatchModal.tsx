import { useState } from "react";
import img from "@/assets/images/Robot.png";
import search from "@/assets/icons/search.svg";

const options = [
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

const AiMatchModal = ({ onClose }) => {
    const [selected, setSelected] = useState("");

    const handleCancel = () => {
        if (onClose) onClose();
    };

    const handleNext = () => {
        console.log("Next step, selected:", selected);
        // navigation or next step logic
    };

    return (
        <div className="max-w-xl mx-auto rounded-xl shadow-lg bg-gradient-to-br from-purple-100 to-purple-50 p-6 relative">
            {/* Header */}
            <div className="flex items-start justify-between">
                <img src={search} alt="Search Icon" />
                <div>
                    <h2 className="text-xl md:text-2xl font-bold">AI Matchmaker</h2>
                    <p className=" text-gray-700 text-sm md:text-base my-4">
                        Hi, I'm Adminity Anna – Let's find your perfect human executive
                        assistant with my AI powers!
                    </p>
                </div>
                <img src={img} alt="AI Matchmaker Robot" className="w-20 h-auto" />
            </div>

            {/* Card Content */}
            <div className="bg-white rounded-lg shadow p-5">
                {/* Progress bar */}
                <div className="w-1/3 h-1.5 bg-purple-400 rounded mb-5"></div>

                <h3 className="text-sm md:text-lg font-semibold mb-4">
                    What kind of help do you need right now?
                </h3>

                {/* Options grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {options.map((opt) => (
                        <button
                            key={opt}
                            type="button"
                            onClick={() => setSelected(opt)}
                            className={`px-2 md:px-3 py-1 md:py-2 rounded-md border text-sm md:font-medium transition cursor-pointer
                ${selected === opt
                                    ? "bg-purple-100 border-purple-500 text-purple-700"
                                    : "bg-white border-gray-300 hover:border-purple-400"
                                }`}
                        >
                            {opt}
                        </button>
                    ))}
                </div>

                {/* Footer buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={handleCancel}
                        className="px-4 py-2 rounded-md border bg-gray-50 text-gray-700 cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={!selected}
                        className={`px-4 py-2 rounded-md text-white 
              ${selected
                                ? "bg-purple-600 hover:bg-purple-700"
                                : "bg-purple-300 cursor-not-allowed"
                            }`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AiMatchModal;
