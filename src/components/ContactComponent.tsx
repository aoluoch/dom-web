import React, { useState } from 'react';
import { Building2, Phone, AtSign } from 'lucide-react';
import PayPalDonation from './PayPalDonation';

type ContactFormData = {
  name: string;
  phoneNo: string;
  email: string;
  topic: string;
  message: string;
};

const topics: string[] = [
  'Membership',
  'Joining a small group',
  'Personal Bible Study',
  'Giving/Making a donation',
  'Other',
];

const ContactComponent: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phoneNo: '',
    email: '',
    topic: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [donationAmount, setDonationAmount] = useState('25.00');

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitAttempted(true);

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Create FormData object for Formspree
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phoneNo);
      formDataToSend.append('topic', formData.topic);
      formDataToSend.append('message', formData.message);

      // Send to Formspree
      const response = await fetch('https://formspree.io/f/xyzdbjll', {
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
          name: '',
          phoneNo: '',
          email: '',
          topic: '',
          message: '',
        });
        setErrors({});
        setSubmitAttempted(false);
      } else {
        // Handle Formspree errors
        const errorData = await response.json();
        console.error('Formspree error:', errorData);
        throw new Error('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Show user-friendly error message
      alert('There was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name } = event.target;
    const fieldName = name as keyof ContactFormData;
    const fieldError = validateField(fieldName, formData[fieldName]);
    setErrors((prev) => ({ ...prev, [fieldName]: fieldError }));
  };

  const handlePayPalSuccess = (details: unknown) => {
    console.log('Donation successful:', details);
    alert('Thank you for your donation! Your contribution helps support our ministry.');
  };

  const handlePayPalError = (error: unknown) => {
    console.error('PayPal donation error:', error);
    alert('There was an error processing your donation. Please try again or contact us directly.');
  };

  const validateForm = (data: ContactFormData) => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    const required = (value: string) => value.trim().length > 0;
    const isValidEmail = (value: string) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
    const isValidPhone = (value: string) =>
      /[0-9]{6,}/.test(value.replace(/[^0-9]/g, ''));

    if (!required(data.name)) newErrors.name = 'Please enter your name.';
    if (!required(data.phoneNo)) newErrors.phoneNo = 'Please enter your phone number.';
    else if (!isValidPhone(data.phoneNo)) newErrors.phoneNo = 'Enter a valid phone number.';
    if (!required(data.email)) newErrors.email = 'Please enter your email address.';
    else if (!isValidEmail(data.email)) newErrors.email = 'Enter a valid email address.';
    if (!required(data.topic)) newErrors.topic = 'Please select a topic.';
    if (!required(data.message)) newErrors.message = 'Please enter a message.';

    return newErrors;
  };

  const validateField = (field: keyof ContactFormData, value: string) => {
    switch (field) {
      case 'name':
        return value.trim() ? '' : 'Please enter your name.';
      case 'phoneNo': {
        if (!value.trim()) return 'Please enter your phone number.';
        const numeric = value.replace(/[^0-9]/g, '');
        return /[0-9]{6,}/.test(numeric) ? '' : 'Enter a valid phone number.';
      }
      case 'email': {
        if (!value.trim()) return 'Please enter your email address.';
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
          ? ''
          : 'Enter a valid email address.';
      }
      case 'topic':
        return value.trim() ? '' : 'Please select a topic.';
      case 'message':
        return value.trim() ? '' : 'Please enter a message.';
      default:
        return '';
    }
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Left: Form */}
          <div>
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              {submitted ? (
                <div className="rounded-md bg-green-50 p-4 text-green-700">
                  Thank you! Your message has been received.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {submitAttempted && Object.keys(errors).length > 0 && (
                    <div className="rounded-md bg-red-50 p-3 text-sm text-red-700">
                      Please fill the highlighted fields below.
                    </div>
                  )}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="flex flex-col">
                      <label htmlFor="name" className="mb-2 text-sm font-medium text-gray-700">
                        Name*
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={Boolean(errors.name) || undefined}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        className={`h-11 rounded-md border px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 ${
                          errors.name
                            ? 'border-red-500 focus:border-red-600 focus:ring-red-600'
                            : 'border-gray-300 focus:border-gray-900 focus:ring-gray-900'
                        }`}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-xs text-red-600">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="phoneNo" className="mb-2 text-sm font-medium text-gray-700">
                        Phone No*
                      </label>
                      <input
                        id="phoneNo"
                        name="phoneNo"
                        type="tel"
                        required
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

                    <div className="flex flex-col">
                      <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-700">
                        Email Address*
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
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
                      <label htmlFor="topic" className="mb-2 text-sm font-medium text-gray-700">
                        Topic
                      </label>
                      <select
                        id="topic"
                        name="topic"
                        required
                        value={formData.topic}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={Boolean(errors.topic) || undefined}
                        aria-describedby={errors.topic ? 'topic-error' : undefined}
                        className={`h-11 rounded-md border bg-white px-3 text-gray-900 focus:outline-none focus:ring-1 ${
                          errors.topic
                            ? 'border-red-500 focus:border-red-600 focus:ring-red-600'
                            : 'border-gray-300 focus:border-gray-900 focus:ring-gray-900'
                        }`}
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        {topics.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                      {errors.topic && (
                        <p id="topic-error" className="mt-1 text-xs text-red-600">
                          {errors.topic}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="message" className="mb-2 text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(errors.message) || undefined}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`rounded-md border px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 ${
                        errors.message
                          ? 'border-red-500 focus:border-red-600 focus:ring-red-600'
                          : 'border-gray-300 focus:border-gray-900 focus:ring-gray-900'
                      }`}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-xs text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* PayPal Donation Section - Only show when "Giving/Making a donation" is selected */}
                  {formData.topic === 'Giving/Making a donation' && (
                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                      <div className="mb-4">
                        <label htmlFor="donationAmount" className="mb-2 block text-sm font-medium text-gray-700">
                          Donation Amount (USD)
                        </label>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-500">$</span>
                          <input
                            id="donationAmount"
                            type="number"
                            min="1"
                            step="0.01"
                            value={donationAmount}
                            onChange={(e) => setDonationAmount(e.target.value)}
                            className="h-10 w-32 rounded-md border border-gray-300 px-3 text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                            placeholder="25.00"
                          />
                        </div>
                      </div>
                      <PayPalDonation
                        amount={donationAmount}
                        currency="USD"
                        onSuccess={handlePayPalSuccess}
                        onError={handlePayPalError}
                      />
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 text-white px-4 xl:px-6 py-2 rounded-md text-sm xl:text-base font-medium transition-all duration-200 shadow-sm hover:shadow focus:outline-none disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? 'Submitting…' : 'Submit'}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">How can we help?</h3>
              <p className="text-gray-600">
                We’d love to help get you connected to one of our locations, a small group,
                or a volunteer opportunity. Feel free to fill out the contact form to receive
                a reply, or contact us via phone.
              </p>

              <div className="space-y-4">
                <div>
                  <h6 className="mb-1 flex items-center text-sm font-semibold text-gray-900">
                    <Building2 className="mr-2 h-4 w-4 text-gray-700" /> Office
                  </h6>
                  <p className="text-gray-600">
                    Unit 7 13 Argall Avenue,
                    <br />
                    EQ 107 7QE, United Kingdom.
                  </p>
                </div>

                <div>
                  <h6 className="mb-1 flex items-center text-sm font-semibold text-gray-900">
                    <Phone className="mr-2 h-4 w-4 text-gray-700" /> Phone
                  </h6>
                  <p className="text-gray-600">+44 7588 844 373</p>
                </div>

                <div>
                  <h6 className="mb-1 flex items-center text-sm font-semibold text-gray-900">
                    <AtSign className="mr-2 h-4 w-4 text-gray-700" /> Email
                  </h6>
                  <p className="text-gray-600">info@davidowusuministries.co.uk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;