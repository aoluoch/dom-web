import React, { useState } from 'react';
import { 
  FormField, 
  SelectField, 
  TextAreaField, 
  ContactInfo, 
  SubmitButton,
  countryOptions 
} from './FormComponents';

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
  achievements: string;
  specialNeeds: string;
}

const Deliverance: React.FC = () => {
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
    ministryIn: '',
    achievements: '',
    specialNeeds: ''
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
    { value: 'facebook', label: 'Facebook' },
    { value: 'instagram', label: 'Instagram' },
    { value: 'whatsapp', label: 'WhatsApp' },
    { value: 'friend/family', label: 'Friend/Family' },
    { value: 'other', label: 'Other' }
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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - School Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                School of Deliverance
              </h2>
              
              <div className="mb-6">
                <img
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  src="https://live.staticflickr.com/65535/54764722068_bc25805981_w.jpg"
                  alt="School of Deliverance"
                />
              </div>
              
              <p className="text-gray-600 mb-4">
                Starting Monday 7th June, 2021: Topics Include
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Understanding demonology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Overcoming the work of demons and evil spirits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">How to be delivered from demonic possession and oppression</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">How to be delivered from demonic dreams and oppressions at night</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Permanently breaking the hold of witchcraft</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Maintaining your deliverance</span>
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
                    label="How did you hear about this course?"
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

                {/* Expectations and Special Needs */}
                <TextAreaField
                  label="What is your expectation as you join the School of Deliverance?"
                  name="achievements"
                  placeholder="Enter your expectations (max 500 words)"
                  rows={7}
                  value={formData.achievements}
                  onChange={handleInputChange}
                />

                <TextAreaField
                  label="Do you have any special needs that you would want addressed during the School?"
                  name="specialNeeds"
                  placeholder="Enter your requests here (max 500 words)"
                  rows={7}
                  value={formData.specialNeeds}
                  onChange={handleInputChange}
                />

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
  );
};

export default Deliverance;