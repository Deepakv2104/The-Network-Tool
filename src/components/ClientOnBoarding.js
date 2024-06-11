import React, { useState } from 'react';

const steps = ['Client Information', 'Service Selection', 'Configuration'];

const ClientOnboarding = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [clientInfo, setClientInfo] = useState({ name: '', contact: '', company: '' });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClientInfo({ ...clientInfo, [name]: value });
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={clientInfo.name}
              onChange={handleInputChange}
              placeholder="Client Name"
              className="px-4 py-2 rounded-md bg-gray-700 text-white outline-none focus:bg-gray-600"
            />
            <input
              type="email"
              name="contact"
              value={clientInfo.contact}
              onChange={handleInputChange}
              placeholder="Contact Email"
              className="px-4 py-2 rounded-md bg-gray-700 text-white outline-none focus:bg-gray-600"
            />
            <input
              type="text"
              name="company"
              value={clientInfo.company}
              onChange={handleInputChange}
              placeholder="Company Name"
              className="px-4 py-2 rounded-md bg-gray-700 text-white outline-none focus:bg-gray-600"
            />
          </div>
        );
      case 1:
        return 'Service Selection Content';
      case 2:
        return 'Configuration Content';
      default:
        return 'Unknown Step';
    }
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-md shadow-md mt-6 sm:w-96 lg:w-full mx-auto">
      <h2 className="text-2xl mb-6">Client Onboarding</h2>
      <div className="pb-6">
        <div className="flex items-center flex-wrap mb-4">
          {steps.map((label, index) => (
            <div key={index} className={`flex items-center ${activeStep === index ? 'text-white' : 'text-gray-400'} mr-4 mb-2 sm:mb-0`}>
              <div className={`rounded-full h-8 w-8 flex items-center justify-center ${activeStep === index ? 'bg-blue-500' : 'bg-gray-700'}`}>
                {index + 1}
              </div>
              <div className={`ml-2 ${activeStep === index ? 'font-semibold' : ''}`}>{label}</div>
            </div>
          ))}
        </div>
        <div>{getStepContent(activeStep)}</div>
      </div>
      <div className="flex justify-end">
        <button className="px-4 py-2 rounded-md bg-gray-700 text-white mr-4" onClick={handleBack} disabled={activeStep === 0}>
          Back
        </button>
        <button className="px-4 py-2 rounded-md bg-blue-500 text-white" onClick={handleNext}>
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default ClientOnboarding;
