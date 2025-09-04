import React from 'react';

// Form Field Component
interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type,
  placeholder,
  required = false,
  value,
  onChange,
  className = ''
}) => {
  return (
    <div className={`form-group ${className}`}>
      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

// Select Field Component
export interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label: string;
  name: string;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  options,
  placeholder,
  required = false,
  value,
  onChange,
  className = ''
}) => {
  return (
    <div className={`form-group ${className}`}>
      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor={name}>
        {label}
      </label>
      <select
        name={name}
        id={name}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        required={required}
        value={value}
        onChange={onChange}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

// Text Area Component
interface TextAreaFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

export const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  name,
  placeholder,
  required = false,
  rows = 4,
  value,
  onChange,
  className = ''
}) => {
  return (
    <div className={`form-group ${className}`}>
      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor={name}>
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

// Contact Information Component
export const ContactInfo: React.FC = () => {
  return (
    <div className="bg-blue-50 p-6 rounded-lg">
      <h5 className="text-lg font-semibold text-blue-900 mb-4">To register, contact:</h5>
      <div className="space-y-2 text-blue-800">
        <p><span className="font-semibold">Africa:</span> +254 759212577</p>
        <p><span className="font-semibold">America:</span> +1 519282-5171</p>
        <p><span className="font-semibold">Europe:</span> +44 7412 5255 22</p>
      </div>
    </div>
  );
};

// Submit Button Component
interface SubmitButtonProps {
  disabled?: boolean;
  className?: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ 
  disabled = false, 
  className = '' 
}) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`w-full px-6 py-3 text-white font-medium rounded-md transition-colors ${
        disabled
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
      } ${className}`}
    >
      Submit Registration
    </button>
  );
};


