// JoinAssistantInfo.tsx (Parent Component)
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonalInfo from './PersonalInfo';
import WorkPreference from './WorkPreference';
import ExperienceSkill from './ExperienceSkill';
import Education from './Education';
import TittleBig from "@/components/shared/Title/TittleBig";
import Wrapper from "@/components/shared/Wrapper";
import FormNav from "./FormNav";

// Interface for all form data
interface FormData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    dob: Date | null;
    location: string;
    profilePhoto: File | null;
  };
  workPreference: {
    workStyle: string;
    languages: string[];
    availableHours: string;
    availableDays: string[];
    rateCurrency: string;
    rateAmount: string;
  };
  experienceSkill: {
    yearsOfExperience: string;
    coreSkills: string[];
    manualSkills: string;
    portfolioPhoto: File | null;
  };
  education: {
    higherDegree: string;
    institutionName: string;
    graduationYear: string;
    certifications: Array<{
      name: string;
      institution: string;
      year: string;
    }>;
    termsAccepted: boolean;
  };
}

const JoinAssistantInfo = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      dob: null,
      location: '',
      profilePhoto: null,
    },
    workPreference: {
      workStyle: '',
      languages: [],
      availableHours: '',
      availableDays: [],
      rateCurrency: 'USD',
      rateAmount: '',
    },
    experienceSkill: {
      yearsOfExperience: '',
      coreSkills: [],
      manualSkills: '',
      portfolioPhoto: null,
    },
    education: {
      higherDegree: '',
      institutionName: '',
      graduationYear: '',
      certifications: [],
      termsAccepted: false,
    },
  });

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const updateFormData = (step: keyof FormData, data: any) => {
    setFormData(prev => ({
      ...prev,
      [step]: { ...prev[step], ...data }
    }));
  };

  const handleSave = () => {
    console.log('All Form Data:', formData);
    navigate('/assistant/home');
  };

  const handleSkip = () => {
    // Clear all form data and navigate to home
    setFormData({
      personalInfo: {
        fullName: '',
        email: '',
        phone: '',
        dob: null,
        location: '',
        profilePhoto: null,
      },
      workPreference: {
        workStyle: '',
        languages: [],
        availableHours: '',
        availableDays: [],
        rateCurrency: 'USD',
        rateAmount: '',
      },
      experienceSkill: {
        yearsOfExperience: '',
        coreSkills: [],
        manualSkills: '',
        portfolioPhoto: null,
      },
      education: {
        higherDegree: '',
        institutionName: '',
        graduationYear: '',
        certifications: [],
        termsAccepted: false,
      },
    });
    navigate('/');
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfo 
            onNext={nextStep} 
            onBack={prevStep} 
            data={formData.personalInfo}
            updateData={(data) => updateFormData('personalInfo', data)}
          />
        );
      case 2:
        return (
          <WorkPreference 
            onNext={nextStep} 
            onBack={prevStep} 
            data={formData.workPreference}
            updateData={(data) => updateFormData('workPreference', data)}
          />
        );
      case 3:
        return (
          <ExperienceSkill 
            onNext={nextStep} 
            onBack={prevStep} 
            data={formData.experienceSkill}
            updateData={(data) => updateFormData('experienceSkill', data)}
          />
        );
      case 4:
        return (
          <Education 
            onBack={prevStep}
            onSave={handleSave}
            onSkip={handleSkip}
            data={formData.education}
            updateData={(data) => updateFormData('education', data)}
          />
        );
      default:
        return (
          <PersonalInfo 
            onNext={nextStep} 
            onBack={prevStep} 
            data={formData.personalInfo}
            updateData={(data) => updateFormData('personalInfo', data)}
          />
        );
    }
  };

  return (
    <Wrapper>
      <FormNav />
      <div className="w-full md:w-3/4 mx-auto">
        <div className="w-full flex justify-center mx-auto text-center mb-10 md:mb-14">
          <TittleBig bigtittle="Join the Adminity Assistant network" />
        </div>
        {renderCurrentStep()}
      </div>
    </Wrapper>
  );
};

export default JoinAssistantInfo;