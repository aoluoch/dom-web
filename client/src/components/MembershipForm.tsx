import React, { useState } from 'react';

type MembershipFormData = {
  fullName: string;
  gender: 'male' | 'female' | '';
  dateOfBirth: string;
  email: string;
  phoneNo: string;
  country: string;
  city: string;
  prayerRequest: string;
};

const initialFormData: MembershipFormData = {
  fullName: '',
  gender: '',
  dateOfBirth: '',
  email: '',
  phoneNo: '',
  country: '',
  city: '',
  prayerRequest: '',
};

const MembershipForm: React.FC = () => {
  const [formData, setFormData] = useState<MembershipFormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof MembershipFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name } = event.target;
    const fieldName = name as keyof MembershipFormData;
    const fieldError = validateField(fieldName, formData[fieldName]);
    setErrors((prev) => ({ ...prev, [fieldName]: fieldError }));
  };

  const validateForm = (data: MembershipFormData) => {
    const newErrors: Partial<Record<keyof MembershipFormData, string>> = {};

    const required = (v: string) => v.trim().length > 0;
    const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
    const isValidPhone = (v: string) => /[0-9]{6,}/.test(v.replace(/[^0-9]/g, ''));
    const isPastDate = (v: string) => {
      if (!v) return false;
      const d = new Date(v);
      const now = new Date();
      return d < now;
    };

    if (!required(data.fullName)) newErrors.fullName = 'Please enter your full name.';
    if (!required(data.gender)) newErrors.gender = 'Please select your gender.';
    if (!required(data.dateOfBirth)) newErrors.dateOfBirth = 'Please select your date of birth.';
    else if (!isPastDate(data.dateOfBirth)) newErrors.dateOfBirth = 'Date of birth must be in the past.';
    if (!required(data.email)) newErrors.email = 'Please enter your email address.';
    else if (!isValidEmail(data.email)) newErrors.email = 'Enter a valid email address.';
    if (!required(data.phoneNo)) newErrors.phoneNo = 'Please enter your phone number.';
    else if (!isValidPhone(data.phoneNo)) newErrors.phoneNo = 'Enter a valid phone number.';
    if (!required(data.country)) newErrors.country = 'Please enter your country.';
    if (!required(data.city)) newErrors.city = 'Please enter your city/town.';
    // Prayer request optional in legacy; keep optional.

    return newErrors;
  };

  const validateField = (field: keyof MembershipFormData, value: string) => {
    switch (field) {
      case 'fullName':
        return value.trim() ? '' : 'Please enter your full name.';
      case 'gender':
        return value.trim() ? '' : 'Please select your gender.';
      case 'dateOfBirth': {
        if (!value.trim()) return 'Please select your date of birth.';
        const d = new Date(value);
        return d < new Date() ? '' : 'Date of birth must be in the past.';
      }
      case 'email': {
        if (!value.trim()) return 'Please enter your email address.';
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
          ? ''
          : 'Enter a valid email address.';
      }
      case 'phoneNo': {
        if (!value.trim()) return 'Please enter your phone number.';
        const numeric = value.replace(/[^0-9]/g, '');
        return /[0-9]{6,}/.test(numeric) ? '' : 'Enter a valid phone number.';
      }
      case 'country':
        return value.trim() ? '' : 'Please enter your country.';
      case 'city':
        return value.trim() ? '' : 'Please enter your city/town.';
      case 'prayerRequest':
        return '';
      default:
        return '';
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitAttempted(true);
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-start-2 md:col-span-10 lg:col-start-2 lg:col-span-8">
            <h4 className="text-xl font-semibold text-gray-900">Your Details</h4>
            <div className="mt-6 rounded-2xl border border-gray-200 p-6 shadow-sm">
              {submitted ? (
                <div className="rounded-md bg-green-50 p-4 text-green-700">
                  Thank you! Your membership registration has been received.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {submitAttempted && Object.keys(errors).length > 0 && (
                    <div className="rounded-md bg-red-50 p-3 text-sm text-red-700">
                      Please fill the highlighted fields below.
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    <div className="flex flex-col">
                      <label htmlFor="fullName" className="mb-2 text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={Boolean(errors.fullName) || undefined}
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                        className={`h-11 rounded-md border px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 ${
                          errors.fullName
                            ? 'border-red-500 focus:border-red-600 focus:ring-red-600'
                            : 'border-gray-300 focus:border-gray-900 focus:ring-gray-900'
                        }`}
                      />
                      {errors.fullName && (
                        <p id="fullName-error" className="mt-1 text-xs text-red-600">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="gender" className="mb-2 text-sm font-medium text-gray-700">
                        Gender
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={Boolean(errors.gender) || undefined}
                        aria-describedby={errors.gender ? 'gender-error' : undefined}
                        className={`h-11 rounded-md border bg-white px-3 text-gray-900 focus:outline-none focus:ring-1 ${
                          errors.gender
                            ? 'border-red-500 focus:border-red-600 focus:ring-red-600'
                            : 'border-gray-300 focus:border-gray-900 focus:ring-gray-900'
                        }`}
                      >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                      {errors.gender && (
                        <p id="gender-error" className="mt-1 text-xs text-red-600">
                          {errors.gender}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="dateOfBirth" className="mb-2 text-sm font-medium text-gray-700">
                        Date of Birth
                      </label>
                      <input
                        id="dateOfBirth"
                        name="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={Boolean(errors.dateOfBirth) || undefined}
                        aria-describedby={errors.dateOfBirth ? 'dob-error' : undefined}
                        className={`h-11 rounded-md border px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 ${
                          errors.dateOfBirth
                            ? 'border-red-500 focus:border-red-600 focus:ring-red-600'
                            : 'border-gray-300 focus:border-gray-900 focus:ring-gray-900'
                        }`}
                      />
                      {errors.dateOfBirth && (
                        <p id="dob-error" className="mt-1 text-xs text-red-600">
                          {errors.dateOfBirth}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="flex flex-col">
                      <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={Boolean(errors.email) || undefined}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className={`h-11 rounded-md border px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 ${
                          errors.email
                            ? 'border-red-500 focus:border-red-600 focus:ring-red-600'
                            : 'border-gray-300 focus:border-gray-900 focus:ring-gray-900'
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-xs text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="phoneNo" className="mb-2 text-sm font-medium text-gray-700">
                        Phone No
                      </label>
                      <input
                        id="phoneNo"
                        name="phoneNo"
                        type="tel"
                        value={formData.phoneNo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={Boolean(errors.phoneNo) || undefined}
                        aria-describedby={errors.phoneNo ? 'phone-error' : undefined}
                        className={`h-11 rounded-md border px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 ${
                          errors.phoneNo
                            ? 'border-red-500 focus:border-red-600 focus:ring-red-600'
                            : 'border-gray-300 focus:border-gray-900 focus:ring-gray-900'
                        }`}
                      />
                      {errors.phoneNo && (
                        <p id="phone-error" className="mt-1 text-xs text-red-600">
                          {errors.phoneNo}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="flex flex-col">
                      <label htmlFor="country" className="mb-2 text-sm font-medium text-gray-700">
                        Country
                      </label>
                      <input
                        id="country"
                        name="country"
                        type="text"
                        value={formData.country}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={Boolean(errors.country) || undefined}
                        aria-describedby={errors.country ? 'country-error' : undefined}
                        className={`h-11 rounded-md border px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 ${
                          errors.country
                            ? 'border-red-500 focus:border-red-600 focus:ring-red-600'
                            : 'border-gray-300 focus:border-gray-900 focus:ring-gray-900'
                        }`}
                      />
                      {errors.country && (
                        <p id="country-error" className="mt-1 text-xs text-red-600">
                          {errors.country}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="city" className="mb-2 text-sm font-medium text-gray-700">
                        City/Town
                      </label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        value={formData.city}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={Boolean(errors.city) || undefined}
                        aria-describedby={errors.city ? 'city-error' : undefined}
                        className={`h-11 rounded-md border px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 ${
                          errors.city
                            ? 'border-red-500 focus:border-red-600 focus:ring-red-600'
                            : 'border-gray-300 focus:border-gray-900 focus:ring-gray-900'
                        }`}
                      />
                      {errors.city && (
                        <p id="city-error" className="mt-1 text-xs text-red-600">
                          {errors.city}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="prayerRequest" className="mb-2 text-sm font-medium text-gray-700">
                      Prayer Request (optional)
                    </label>
                    <textarea
                      id="prayerRequest"
                      name="prayerRequest"
                      rows={8}
                      placeholder="Enter your prayer request here. We'll pray with you to make it happen"
                      value={formData.prayerRequest}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 text-white px-4 xl:px-6 py-2 rounded-md text-sm xl:text-base font-medium transition-all duration-200 shadow-sm hover:shadow focus:outline-none disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? 'Registering…' : 'Register'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipForm;