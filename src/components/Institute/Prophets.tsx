import React, { useState } from 'react';
import {
  FormField,
  SelectField,
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
  level: string;
  church: string;
  ministryArea: string;
  ministryIn: string;
}

const Prophets: React.FC = () => {
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
    level: '',
    church: '',
    ministryArea: '',
    ministryIn: ''
  });

  const [showMinistryAreaOther, setShowMinistryAreaOther] = useState(false);
  const [showMinistryInOther, setShowMinistryInOther] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Handle conditional field visibility
    if (name === 'ministryArea') {
      setShowMinistryAreaOther(value === 'other');
    }
    if (name === 'ministryIn') {
      setShowMinistryInOther(value === 'other');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
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

  const levelOptions = [
    { value: 'level 1', label: 'Level 1' },
    { value: 'level 2', label: 'Level 2' },
    { value: 'level 3', label: 'Level 3' }
  ];

  const ministryAreaOptions = [
    { value: 'Administration', label: 'Administration' },
    { value: 'Children', label: 'Children' },
    { value: 'Intercessory', label: 'Intercessory' },
    { value: 'Men\'s', label: 'Men\'s' },
    { value: 'Women\'s', label: 'Women\'s' },
    { value: 'Protocol', label: 'Protocol' },
    { value: 'Ushering', label: 'Ushering' },
    { value: 'Worship', label: 'Worship' },
    { value: 'Youth', label: 'Youth' },
    { value: 'other', label: 'Other' }
  ];

  const ministryInOptions = [
    { value: 'Apostle', label: 'Apostle' },
    { value: 'Prophet', label: 'Prophet' },
    { value: 'Pastor', label: 'Pastor' },
    { value: 'teacher', label: 'Teacher' },
    { value: 'Evangelist', label: 'Evangelist' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <>
    <Cover
    title="School Of Prophets"
    subtitle="Register for our School Of Prophets Programme"/>
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - School Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                School of Prophets
              </h2>
              <p className="text-gray-600 mb-6">
                Ongoing registration for level 1 & 2. Topics include:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Fundamentals of Prophetic Ministry</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Guidelines into the Prophetic Ministry</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Sharpening your Prophetic gift</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Do's and Don'ts in the Prophetic Ministry</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Developing Higher Spiritual discernment</span>
                </li>
              </ul>
              <ContactInfo />
            </div>
          </div>

          {/* Right Side - Registration Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Details</h3>
              
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
                    label="Email"
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

                {/* Course Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <SelectField
                    label="Which level are you registering for?"
                    name="level"
                    options={levelOptions}
                    placeholder="Please select one:"
                    value={formData.level}
                    onChange={handleInputChange}
                  />
                  
                  <FormField
                    label="Name of Church/Ministry you attend/support"
                    name="church"
                    type="text"
                    placeholder="Church/Ministry"
                    required
                    value={formData.church}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Ministry Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <SelectField
                    label="Do you currently serve in your church? If Yes, in which department?"
                    name="ministryArea"
                    options={ministryAreaOptions}
                    placeholder="Please select one:"
                    value={formData.ministryArea}
                    onChange={handleInputChange}
                  />
                  
                  {showMinistryAreaOther && (
                    <FormField
                      label="Please specify ministry area"
                      name="ministryAreaOther"
                      type="text"
                      placeholder="Enter ministry area here"
                      value=""
                      onChange={handleInputChange}
                    />
                  )}
                  
                  <SelectField
                    label="Which of the Fivefold Office do you operate/desire to operate in?"
                    name="ministryIn"
                    options={ministryInOptions}
                    placeholder="Please select one:"
                    value={formData.ministryIn}
                    onChange={handleInputChange}
                  />
                  
                  {showMinistryInOther && (
                    <FormField
                      label="Please specify ministry"
                      name="ministryInOther"
                      type="text"
                      placeholder="Enter ministry here"
                      value=""
                      onChange={handleInputChange}
                    />
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-6">
                  <SubmitButton />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Prophets;