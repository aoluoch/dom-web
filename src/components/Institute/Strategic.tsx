import React, { useState } from 'react';
import {
  FormField,
  SelectField,
  TextAreaField,
  ContactInfo,
  SubmitButton
} from './FormComponents';
import { countryOptions } from './countryOptions';
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

const Strategic: React.FC = () => {
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

    try {
      // Create FormData object for Formspree
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('surname', formData.surname);
      formDataToSend.append('gender', formData.gender);
      formDataToSend.append('birthYear', formData.birthYear);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('countryCode', formData.countryCode);
      formDataToSend.append('phoneNumber', formData.phoneNumber);
      formDataToSend.append('town', formData.town);
      formDataToSend.append('financialPlan', formData.financialPlan);
      formDataToSend.append('planPeriod', formData.planPeriod);
      formDataToSend.append('documentedStrategicPlan', formData.documentedStrategicPlan);
      formDataToSend.append('strategicPlanPeriod', formData.strategicPlanPeriod);
      formDataToSend.append('strategicPlanReview', formData.strategicPlanReview);
      formDataToSend.append('occupation', formData.occupation);
      formDataToSend.append('achievements', formData.achievements);

      // Send to Formspree
      const response = await fetch('https://formspree.io/f/xrbaokje', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        // Reset form data
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
      } else {
        // Handle Formspree errors
        const errorData = await response.json();
        console.error('Formspree error:', errorData);
        throw new Error('Failed to submit registration. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting strategic form:', error);
      // Show user-friendly error message
      alert('There was an error submitting your registration. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
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
    title="School Of Strategic Planning"
    subtitle="Register for our School Of Strategic Planning Programme"/>
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - School Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                School of Strategic Planning
              </h2>
              <p className="text-gray-600 mb-6">
                In our School of Strategic Planning, you will learn how to start:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Planning your finances in 2024</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Linking your purpose to your strategic plan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Planning your life for maximum results</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Being effective and efficient</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Working hard vs Working smart</span>
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
                <div className="rounded-md bg-green-50 p-4 text-green-700 text-center">
                  <h4 className="text-lg font-semibold mb-2">Registration Successful!</h4>
                  <p>Thank you for registering for the School of Strategic Planning. We will contact you soon with further details.</p>
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

export default Strategic;