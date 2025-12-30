import { useNavigate } from "react-router-dom";

const SkillsSelectionStep = ({ 
  skills, 
  onSkillToggle, 
  onNext, 
  onBack 
}) => {
  const navigate = useNavigate();

  const handleNext = () => {
    // Log only the selected skills
    const selectedSkills = skills.filter(skill => skill.selected).map(skill => skill.name);
    console.log("Selected Skills:", selectedSkills);

    // Call parent handler if needed
    if (onNext) onNext();

    // Navigate to AI matcher page
    navigate("/ai-matcher");
  };

  return (
    <div className="bg-white rounded-lg shadow p-5">
      <div className="w-full h-1.5 bg-purple-400 rounded mb-5"></div>
      
      <h3 className="text-lg font-semibold mb-4">
        Any specific skills or preferences you want me to consider?
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        {skills.map((skill, index) => (
          <label key={skill.name} className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={skill.selected}
              onChange={() => onSkillToggle(index)}
              className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 cursor-pointer"
            />
            <span className="ml-2 text-sm text-gray-700">{skill.name}</span>
          </label>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 cursor-pointer"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 cursor-pointer"
        >
          Find Your Match
        </button>
      </div>
    </div>
  );
};

export default SkillsSelectionStep;
