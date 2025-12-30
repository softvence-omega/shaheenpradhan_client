import { useState } from "react";
import ServiceSelectionStep from "./ServiceSelectionStep";
import ModalHeader from "./ModalHearder";
import SchedulePreferencesStep from "./SchedulePreferencesStep ";
import SkillsSelectionStep from "./SkillsSelectionStep ";

// ✅ All skills start as NOT selected (false)
const skillsOptions = [
  { name: "Social Media", selected: false },
  { name: "QuickBooks", selected: false },
  { name: "Visa Set-up", selected: false },
  { name: "Google Calendar", selected: false },
  { name: "Business Set-up", selected: false },
  { name: "Accounting", selected: false },
  { name: "Sales Force", selected: false },
  { name: "SAP", selected: false },
];

const AiMatchModal = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  
  // Step 0 data - starts empty
  const [selectedService, setSelectedService] = useState("");
  
  // Step 1 data - all fields start empty (no defaults)
  const [formData, setFormData] = useState({
    date: "",
    startTime: "",
    endTime: "",
    workMode: "",
    location: "",
    differentTimezone: ""
  });
  
  // Step 2 data - all skills start unselected
  const [skills, setSkills] = useState(skillsOptions);

  const handleCancel = () => {
    if (onClose) onClose();
  };

  const handleNext = () => {
    if (currentStep === 0) {
      setCurrentStep(1);
    } else if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      // ✅ Console log ALL data in one organized array
      const finalData = [
        {
          section: "Service Selection",
          data: selectedService
        },
        {
          section: "Schedule & Preferences",
          data: {
            date: formData.date,
            startTime: formData.startTime,
            endTime: formData.endTime,
            workMode: formData.workMode,
            location: formData.location,
            differentTimezone: formData.differentTimezone
          }
        },
        {
          section: "Selected Skills",
          data: skills.filter(skill => skill.selected).map(skill => skill.name)
        }
      ];
      
      console.log("Complete Form Data:", finalData);
      
      // Handle final submission
      if (onClose) onClose();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const handleFormDataChange = (newFormData) => {
    setFormData(newFormData);
  };

  const handleSkillToggle = (index) => {
    const updatedSkills = [...skills];
    updatedSkills[index].selected = !updatedSkills[index].selected;
    setSkills(updatedSkills);
  };

  return (
    <div className="max-w-xl mx-auto rounded-xl shadow-lg bg-gradient-to-br from-purple-100 to-purple-50 p-6 relative">
      {/* Header Component */}
      <ModalHeader />

      {/* Step Content */}
      {currentStep === 0 && (
        <ServiceSelectionStep
          selectedService={selectedService}
          onServiceSelect={handleServiceSelect}
          onNext={handleNext}
          onCancel={handleCancel}
        />
      )}
      
      {currentStep === 1 && (
        <SchedulePreferencesStep
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      
      {currentStep === 2 && (
        <SkillsSelectionStep
          skills={skills}
          onSkillToggle={handleSkillToggle}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
    </div>
  );
};

export default AiMatchModal;