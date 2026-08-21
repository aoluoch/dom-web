import React, { useState } from 'react';
import {
  FormField,
  SelectField,
  TextAreaField,
  ContactInfo,
  SubmitButton
} from './FormComponents';
import { countryOptions } from './countryOptions';
import { sendFormEmail } from '../../lib/sendFormEmail';
import Cover from '../Cover';

interface FormData {
  title: string;
  firstName: string;
  surname: string;
  gender: string;
  birthYear: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  town: string;
  financialPlan: string;
  planPeriod: string;
  documentedStrategicPlan: string;
  strategicPlanPeriod: string;
  strategicPlanReview: string;
  occupation: string;
  achievements: string;
}

const SchoolPurpose: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    firstName: '',
    surname: '',
    gender: '',
    birthYear: '',
    email: '',
    countryCode: '',
    phoneNumber: '',
    town: '',
    financialPlan: '',
    planPeriod: '',
    documentedStrategicPlan: '',
    strategicPlanPeriod: '',
    strategicPlanReview: '',
    occupation: '',
    achievements: ''
  });

  const [showPlanDiv, setShowPlanDiv] = useState(false);
  const [showStrategicDiv, setShowStrategicDiv] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Handle conditional field visibility
    if (name === 'financialPlan') {
      setShowPlanDiv(value === 'Yes');
    }
    if (name === 'documentedStrategicPlan') {
      setShowStrategicDiv(value === 'Yes');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    sendFormEmail({
      formName: 'School of Purpose Registration Form',
      subject: `School of Purpose Registration – ${formData.firstName} ${formData.surname}`,
      fields: [
        { label: 'Title', value: formData.title },
        { label: 'First Name', value: formData.firstName },
        { label: 'Surname', value: formData.surname },
        { label: 'Gender', value: formData.gender },
        { label: 'Date of Birth', value: formData.birthYear },
        { label: 'Email Address', value: formData.email },
        { label: 'Country Code', value: formData.countryCode },
        { label: 'Phone Number', value: formData.phoneNumber },
        { label: 'Location (town)', value: formData.town },
        { label: 'Works with a financial plan or budget', value: formData.financialPlan },
        { label: 'How often finances are tracked', value: formData.planPeriod },
        { label: 'Has a documented strategic plan', value: formData.documentedStrategicPlan },
        { label: 'Strategic plan period', value: formData.strategicPlanPeriod },
        { label: 'How often strategic plan is reviewed', value: formData.strategicPlanReview },
        { label: 'Current occupation', value: formData.occupation },
        { label: 'What they would like to achieve', value: formData.achievements },
      ],
    });

    setSubmitted(true);
    setFormData({
      title: '',
      firstName: '',
      surname: '',
      gender: '',
      birthYear: '',
      email: '',
      countryCode: '',
      phoneNumber: '',
      town: '',
      financialPlan: '',
      planPeriod: '',
      documentedStrategicPlan: '',
      strategicPlanPeriod: '',
      strategicPlanReview: '',
      occupation: '',
      achievements: ''
    });
    setShowPlanDiv(false);
    setShowStrategicDiv(false);
    setIsSubmitting(false);
  };

  const titleOptions = [
    { value: 'Dr', label: 'Dr.' },
    { value: 'Rev', label: 'Rev.' },
    { value: 'Mr', label: 'Mr.' },
    { value: 'Ms', label: 'Ms.' }
  ];

  const genderOptions = [
    { value: 'Female', label: 'Female' },
    { value: 'Male', label: 'Male' }
  ];

  const yesNoOptions = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ];

  const planPeriodOptions = [
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'quaterly', label: 'Quarterly' },
    { value: 'annually', label: 'Annually' }
  ];

  const strategicPlanPeriodOptions = [
    { value: '1- 2 Years', label: '1- 2 Years' },
    { value: '3 – 5 Years', label: '3 – 5 Years' },
    { value: '6 – 10 Years', label: '6 – 10 Years' },
    { value: '10 and Above', label: '10 and Above' }
  ];

  const strategicPlanReviewOptions = [
    { value: 'Monthly', label: 'Monthly' },
    { value: 'Quarterly', label: 'Quarterly' },
    { value: 'Half Yearly', label: 'Half Yearly' },
    { value: 'Annually', label: 'Annually' }
  ];

  const occupationOptions = [
    { value: 'Student', label: 'Student' },
    { value: 'Employed', label: 'Employed' },
    { value: 'Entrepreneur', label: 'Entrepreneur' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <>
    <Cover
        title="School Of Purpose"
        subtitle="Register for our School Of Purpose Programme"/>
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - School Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                School of Purpose
              </h2>
              <p className="text-gray-600 mb-6">
                In our School of Purpose, the topics include:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">How do I know the purpose of God for my life?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">What was I born to do?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">How can I live a purposeful life?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">How to unleash your gifts and potentials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">How to set aligned and successful goals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">How to keep the flame of your vision alive</span>
                </li>
              </ul>
              <ContactInfo />
            </div>
          </div>

          {/* Right Side - Registration Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Details</h3>

              {submitted ? (
                <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="mb-2 text-lg font-semibold text-green-800">Your registration is ready to send!</h4>
                  <p className="text-sm text-green-700">
                    We&apos;ve opened your email app with your School of Purpose registration pre-filled.
                    Just press send and we&apos;ll contact you soon with further details.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700 focus:outline-none"
                  >
                    Submit another registration
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <SelectField
                    label="Title"
                    name="title"
                    options={titleOptions}
                    placeholder="Select Title"
                    required
                    value={formData.title}
                    onChange={handleInputChange}
                  />
                  
                  <FormField
                    label="First Name"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="md:col-span-1"
                  />
                  
                  <FormField
                    label="Surname"
                    name="surname"
                    type="text"
                    placeholder="Surname"
                    required
                    value={formData.surname}
                    onChange={handleInputChange}
                  />
                  
                  <SelectField
                    label="Gender"
                    name="gender"
                    options={genderOptions}
                    placeholder="Please select one:"
                    required
                    value={formData.gender}
                    onChange={handleInputChange}
                  />
                  
                  <FormField
                    label="Date of Birth"
                    name="birthYear"
                    type="date"
                    required
                    value={formData.birthYear}
                    onChange={handleInputChange}
                  />
                  
                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <SelectField
                    label="Country - Code"
                    name="countryCode"
                    options={countryOptions}
                    value={formData.countryCode}
                    onChange={handleInputChange}
                  />
                  
                  <FormField
                    label="Phone Number"
                    name="phoneNumber"
                    type="text"
                    placeholder="Phone Number"
                    required
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                  
                  <FormField
                    label="Location (town)"
                    name="town"
                    type="text"
                    placeholder="Location(town)"
                    required
                    value={formData.town}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Financial Planning */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <SelectField
                    label="Do you work with a financial plan or a budget?"
                    name="financialPlan"
                    options={yesNoOptions}
                    placeholder="Please select one:"
                    value={formData.financialPlan}
                    onChange={handleInputChange}
                  />
                  
                  {showPlanDiv && (
                    <SelectField
                      label="How often do you track your finances?"
                      name="planPeriod"
                      options={planPeriodOptions}
                      placeholder="Please select one:"
                      value={formData.planPeriod}
                      onChange={handleInputChange}
                    />
                  )}
                </div>

                {/* Strategic Planning */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <SelectField
                    label="Do you have a documented strategic plan for your life?"
                    name="documentedStrategicPlan"
                    options={yesNoOptions}
                    placeholder="Please select one:"
                    value={formData.documentedStrategicPlan}
                    onChange={handleInputChange}
                  />
                  
                  {showStrategicDiv && (
                    <SelectField
                      label="For how many years?"
                      name="strategicPlanPeriod"
                      options={strategicPlanPeriodOptions}
                      placeholder="Please select one:"
                      value={formData.strategicPlanPeriod}
                      onChange={handleInputChange}
                    />
                  )}
                  
                  <SelectField
                    label="How often do you review your strategic plan?"
                    name="strategicPlanReview"
                    options={strategicPlanReviewOptions}
                    placeholder="Please select one:"
                    value={formData.strategicPlanReview}
                    onChange={handleInputChange}
                  />
                  
                  <SelectField
                    label="What is your current occupation?"
                    name="occupation"
                    options={occupationOptions}
                    placeholder="Please select one:"
                    value={formData.occupation}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Achievements */}
                <TextAreaField
                  label="What would you like to achieve from this Training?"
                  name="achievements"
                  placeholder="Enter achievements (max 500 words)"
                  rows={7}
                  value={formData.achievements}
                  onChange={handleInputChange}
                />

                {/* Submit Button */}
                <div className="flex justify-center pt-6">
                  <SubmitButton disabled={isSubmitting} />
                </div>
              </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SchoolPurpose;