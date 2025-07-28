import React, { useState } from "react";
import axios from "axios"; // Ensure axios is installed if you plan to use it for real API calls

// Reusable Input Field Component
const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  disabled = false,
  placeholder,
  pattern,
  maxLength,
}) => (
  <div>
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      placeholder={placeholder}
      pattern={pattern}
      maxLength={maxLength}
      className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200 ${
        disabled ? "bg-gray-100 cursor-not-allowed" : ""
      }`}
    />
  </div>
);

// Reusable Textarea Field Component
const TextareaField = ({
  label,
  name,
  value,
  onChange,
  required = false,
  placeholder,
  rows = 3,
}) => (
  <div>
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      rows={rows}
      placeholder={placeholder}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
    ></textarea>
  </div>
);

// Reusable File Input Component
const FileInputField = ({
  label,
  name,
  file,
  onChange,
  required = false,
  disabled = false,
  accept,
}) => (
  <div>
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type="file"
      id={name}
      name={name}
      onChange={onChange}
      required={required}
      disabled={disabled}
      accept={accept}
      className={`block w-full text-sm text-gray-600 border border-gray-300 rounded-md p-2 cursor-pointer
                 file:bg-gradient-to-br file:from-purple-500 file:to-purple-600 file:text-white
                 file:rounded-md file:border-0 file:px-4 file:py-2 file:text-sm file:font-semibold
                 file:cursor-pointer hover:file:from-purple-600 hover:file:to-purple-700
                 transition-all duration-200 ease-in-out ${
                   disabled ? "bg-gray-100 cursor-not-allowed" : ""
                 }`}
    />
    {file && (
      <p className="mt-1 text-xs text-gray-500">Selected: {file.name}</p>
    )}
  </div>
);

// Main Enroll Now Form Component
const EnrollNowForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    districtVillage: "",
    planName: "Standard", // Auto-filled example
    queryConcern: "", // Frontend name
    aadharNo: "", // Frontend name
    upload712Document: null, // Frontend name (File object)
    consent: false, // Frontend name
    // Hidden/Auto-filled fields (will be set programmatically)
    planPrice: "₹2500", // Example price for 'Standard' plan
    timestamp: new Date().toISOString(),
    internalUserId: "USER_ABC_123", // Example user ID
    paymentMethod: "", // Will be set after payment
  });

  const [isAadharEnabled, setIsAadharEnabled] = useState(false); // State to control Aadhaar field
  const [is712Enabled, setIs712Enabled] = useState(false); // State to control 7/12 field

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : null,
    }));
  };

  // Corrected handleSubmit function with backend integration logic
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!formData.consent) {
      // Using alert for simplicity, replace with custom modal in production
      alert("Please agree to the terms and conditions.");
      return;
    }

    console.log("Attempting to submit form data:", {
      ...formData,
      isAadharEnabled,
      is712Enabled,
    }); // Log data before submission

    try {
      let dataToSend;
      let headers = {}; // Axios will set Content-Type automatically for FormData

      // Prepare data for backend: map frontend names to backend names
      // FIX: Include isAadharEnabled and is712Enabled directly from their states
      const commonFields = {
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        districtVillage: formData.districtVillage,
        planName: formData.planName,
        query: formData.queryConcern, // Mapped: queryConcern -> query
        aadhaarEnabled: isAadharEnabled, // FIX: Use isAadharEnabled state directly
        aadhaarNumber: formData.aadharNo, // Mapped: aadharNo -> aadhaarNumber
        documentEnabled: is712Enabled, // FIX: Use is712Enabled state directly
        agreedToTerms: formData.consent, // Mapped: consent -> agreedToTerms
        // You might also send planPrice, timestamp, internalUserId, paymentMethod if needed by backend
        planPrice: formData.planPrice,
        timestamp: formData.timestamp,
        internalUserId: formData.internalUserId,
        paymentMethod: formData.paymentMethod,
      };

      // If a file is present, use FormData for multipart/form-data submission
      if (formData.upload712Document) {
        const formPayload = new FormData();
        // Append common fields
        for (const key in commonFields) {
          // FormData.append converts booleans to "true"/"false" strings automatically
          formPayload.append(key, commonFields[key]);
        }
        // Append the file
        formPayload.append("documentFile", formData.upload712Document); // Use a consistent name like 'documentFile' for the actual file
        dataToSend = formPayload;
      } else {
        // If no files, send as JSON
        dataToSend = commonFields; // Send mapped fields as JSON
        headers["Content-Type"] = "application/json"; // Explicitly set for JSON
      }

      // FIX: Change the URL to point to your backend server (ensure port matches your backend)
      const response = await axios.post(
        "http://localhost:3002/api/enroll",
        dataToSend,
        { headers }
      );

      console.log("Backend response:", response.data); // Log backend response
      alert("Enrollment successful! Your data has been sent to the backend."); // Inform user
      // You might want to clear the form or redirect after successful submission
      // setFormData({ ...initial state or reset values });
    } catch (error) {
      console.error("Enrollment submission error:", error); // Log the full error
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        alert(
          "Error: " +
            (error.response.data.error || "Something went wrong on the server.")
        );
      } else if (error.request) {
        // Request was made but no response was received
        console.error("Error request:", error.request);
        alert(
          "Error: No response from server. Please ensure the backend is running and accessible."
        );
      } else {
        // Something else happened while setting up the request
        alert(
          "Failed to enroll. Please try again. (Check console for details)"
        );
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 w-full max-w-2xl border-t-4 border-purple-600">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          ✨ Enroll Now
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Section 1: Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="e.g., Ramesh Kumar"
            />
            <InputField
              label="Phone Number"
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              maxLength="10"
              placeholder="e.g., 9876543210"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required={false} // Optional
              placeholder="e.g., ramesh@example.com"
            />
            <InputField
              label="District / Village"
              name="districtVillage"
              value={formData.districtVillage}
              onChange={handleChange}
              required
              placeholder="e.g., Pune / Wagholi"
            />
          </div>

          {/* Plan Name (Auto-filled/Hidden) */}
          <InputField
            label="Plan Name"
            name="planName"
            value={formData.planName}
            onChange={handleChange} // Keep onChange for consistency if it were an actual input
            disabled={true} // Auto-filled, not editable by user
            placeholder="Plan will be auto-filled"
          />

          {/* Query / Concern */}
          <TextareaField
            label="Query / Concern"
            name="queryConcern"
            value={formData.queryConcern}
            onChange={handleChange}
            required={false} // Optional
            placeholder="Any specific questions or concerns?"
          />

          {/* Aadhaar No. (Optional & Disabled by default) */}
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="enableAadhar"
              checked={isAadharEnabled}
              onChange={() => setIsAadharEnabled(!isAadharEnabled)}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label
              htmlFor="enableAadhar"
              className="text-sm font-medium text-gray-700"
            >
              Enable Aadhaar No. (Optional)
            </label>
          </div>
          <InputField
            label="Aadhaar No."
            name="aadharNo"
            type="text"
            value={formData.aadharNo}
            onChange={handleChange}
            required={false}
            disabled={!isAadharEnabled}
            pattern="^[2-9]{1}[0-9]{11}$"
            maxLength="12"
            placeholder="12-digit Aadhaar number"
          />

          {/* Upload 7/12 Document (Optional & Disabled by default) */}
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="enable712"
              checked={is712Enabled}
              onChange={() => setIs712Enabled(!is712Enabled)}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label
              htmlFor="enable712"
              className="text-sm font-medium text-gray-700"
            >
              Enable 7/12 Document Upload (Optional)
            </label>
          </div>
          <FileInputField
            label="Upload 7/12 Document"
            name="upload712Document"
            file={formData.upload712Document}
            onChange={handleFileChange}
            required={false}
            disabled={!is712Enabled}
            accept=".pdf,.jpg,.jpeg,.png"
          />

          {/* Privacy Disclaimer */}
          <p className="text-sm text-gray-600 bg-blue-50 border-l-4 border-blue-400 p-3 rounded-md">
            <span className="font-semibold">Privacy Note:</span> Your data will
            only be used for consultation purposes and will not be shared
            without explicit consent.
          </p>

          {/* Consent Checkbox */}
          <div className="flex items-start">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              className="h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded-md mt-1 cursor-pointer"
            />
            <label
              htmlFor="consent"
              className="ml-3 text-base text-gray-700 cursor-pointer"
            >
              I agree to terms, refund policy, and data usage.{" "}
              <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Hidden Fields (for programmatic use) */}
          <input type="hidden" name="planPrice" value={formData.planPrice} />
          <input type="hidden" name="timestamp" value={formData.timestamp} />
          <input
            type="hidden"
            name="internalUserId"
            value={formData.internalUserId}
          />
          {/* Payment Method will be set after payment gateway interaction */}
          <input
            type="hidden"
            name="paymentMethod"
            value={formData.paymentMethod}
          />

          {/* CTA Section */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-md font-semibold text-lg shadow-lg hover:bg-green-700 transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50"
            >
              💳 Proceed to Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnrollNowForm;
