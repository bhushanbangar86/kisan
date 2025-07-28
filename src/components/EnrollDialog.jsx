import React, { useState } from "react";

// Input Field Component
const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  ...props
}) => (
  <div>
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={props.required !== false} // Default to required, allow overriding
      className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200 ease-in-out"
      {...props}
    />
  </div>
);

// Select Field Component (New)
const SelectField = ({ label, name, value, onChange, options, ...props }) => (
  <div>
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={props.required !== false} // Default to required
      className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200 ease-in-out bg-white appearance-none pr-8"
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

// File Input Component
const FileInput = ({ label, name, file, onChange }) => (
  <div>
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <input
      type="file"
      id={name}
      name={name}
      onChange={onChange}
      accept=".pdf,.jpg,.jpeg,.png"
      className="block w-full text-sm text-gray-600 border border-gray-300 rounded-md p-2 cursor-pointer
                 file:bg-gradient-to-br file:from-purple-500 file:to-purple-600 file:text-white
                 file:rounded-md file:border-0 file:px-4 file:py-2 file:text-sm file:font-semibold
                 file:cursor-pointer hover:file:from-purple-600 hover:file:to-purple-700
                 transition-all duration-200 ease-in-out"
    />
    {file && (
      <p className="mt-1 text-xs text-gray-500">Selected: {file.name}</p>
    )}
  </div>
);

// Main EnrollDialog Component
const EnrollDialog = ({ open, onClose, onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    district: "",
    taluka: "",
    village: "",
    fpcOption: "", // New state for the dropdown
    farmDetail: "", // New state for farm details
    aadhar: "",
    aadharFile: null,
    sevenTwelveFile: null,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.files?.[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(form);
    onClose();
  };

  if (!open) return null;

  const fpcOptions = [
    { value: "", label: "Select an option" }, // Default empty option
    { value: "self_fpc", label: "Self FPC" },
    { value: "dummy_option", label: "Dummy Option" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm p-4 sm:p-6 md:p-8 mt-13">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl p-6 sm:p-10 relative transform transition-all duration-300 ease-out scale-100 opacity-100">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-3xl font-semibold transition-colors duration-200"
          onClick={onClose}
          aria-label="Close dialog"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-center text-gray-900 mb-8 pb-4 border-b-2 border-purple-200">
          🚀 Enroll Now
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Top Row: Name and Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g., John Doe"
            />

            <InputField
              label="Mobile Number"
              name="mobile"
              type="tel"
              value={form.mobile}
              onChange={handleChange}
              placeholder="e.g., 9876543210"
              pattern="^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$"
              maxLength={10}
            />
          </div>

          {/* District, Taluka, Village */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <InputField
              label="District"
              name="district"
              value={form.district}
              onChange={handleChange}
              placeholder="e.g., Pune"
            />
            <InputField
              label="Taluka"
              name="taluka"
              value={form.taluka}
              onChange={handleChange}
              placeholder="e.g., Haveli"
            />
            <InputField
              label="Village"
              name="village"
              value={form.village}
              onChange={handleChange}
              placeholder="e.g., Wagholi"
            />
          </div>

          {/* New Fields: FPC Option and Aadhar Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SelectField
              label="FPC Option"
              name="fpcOption"
              value={form.fpcOption}
              onChange={handleChange}
              options={fpcOptions}
            />
            <InputField
              label="Aadhar Number"
              name="aadhar"
              value={form.aadhar}
              onChange={handleChange}
              placeholder="e.g., 123456789012"
              pattern="^[2-9]{1}[0-9]{11}$"
              maxLength={12}
            />
          </div>

          {/* Farm Detail */}
          <InputField
            label="Farm Detail"
            name="farmDetail"
            value={form.farmDetail}
            onChange={handleChange}
            placeholder="e.g., 2 acres, irrigated"
            required={false} // Make this optional if needed
          />

          {/* File Uploads: Aadhar Card and 7/12 Document */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <FileInput
              label="Upload Aadhar Card 📄"
              name="aadharFile"
              file={form.aadharFile}
              onChange={handleFileChange}
            />

            <FileInput
              label="Upload 7/12 Document 📋"
              name="sevenTwelveFile"
              file={form.sevenTwelveFile}
              onChange={handleFileChange}
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-700 to-purple-900 text-white py-3 rounded-lg font-bold text-lg shadow-xl hover:from-purple-800 hover:to-purple-950 transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-70"
            >
              🎉 Enroll & Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnrollDialog;
