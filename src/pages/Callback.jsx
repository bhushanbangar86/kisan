import axios from "axios";
import React, { useState } from "react";

const CallbackForm = () => {
  // State for form data
  const [formData, setFormData] = useState({
    farmerName: "",
    phoneNumber: "",
    planInterestedIn: "",
    districtVillage: "",
    preferredCallbackTime: "",
    messageQuery: "",
  });

  // State for form submission status and success message
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedFarmerName, setSubmittedFarmerName] = useState("");

  // Options for dropdowns
  const planOptions = [
    { value: "", label: "Select a plan (Optional)" },
    { value: "Basic", label: "Basic" },
    { value: "Standard", label: "Standard" },
    { value: "Premium", label: "Premium" },
    { value: "Not Sure", label: "Not Sure" },
  ];

  const timeOptions = [
    { value: "", label: "Select a time (Optional)" },
    { value: "morning", label: "Morning" },
    { value: "afternoon", label: "Afternoon" },
    { value: "evening", label: "Evening" },
    { value: "Anytime", label: "Anytime" },
  ];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3002/api/callback",
        formData
      );

      console.log("Callback Request Submitted:", response.data);

      setSubmittedFarmerName(formData.farmerName);
      setIsSubmitted(true);

      // Reset the form if needed
      setFormData({
        farmerName: "",
        phoneNumber: "",
        planInterestedIn: "",
        districtVillage: "",
        preferredCallbackTime: "",
        messageQuery: "",
      });
    } catch (error) {
      if (error.response) {
        // Server responded with an error status
        console.error(
          "Submission failed:",
          error.response.data.message || error.message
        );
      } else {
        // No response or network error
        console.error("Error submitting callback request:", error.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 w-full max-w-lg">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
          📞 Request a Callback
        </h2>

        {isSubmitted ? (
          <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
            <p className="text-xl font-semibold text-green-800 mb-4">
              🎉 Thank you, {submittedFarmerName}!
            </p>
            <p className="text-gray-700 mb-4">
              Our agri-expert team will call you shortly to discuss your query.
            </p>
            <p className="text-gray-700 font-medium">
              If urgent, you may also reach us at:{" "}
              <span className="text-purple-600">📞 98344 14542</span>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Farmer Name */}
            <div>
              <label
                htmlFor="farmerName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Farmer Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="farmerName"
                name="farmerName"
                value={formData.farmerName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
                placeholder="Your Full Name"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                maxLength="10"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
                placeholder="e.g., 9876543210"
              />
            </div>

            {/* Plan Interested In */}
            <div>
              <label
                htmlFor="planInterestedIn"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Plan Interested In
              </label>
              <select
                id="planInterestedIn"
                name="planInterestedIn"
                value={formData.planInterestedIn}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white transition duration-200"
              >
                {planOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* District / Village */}
            <div>
              <label
                htmlFor="districtVillage"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                District / Village
              </label>
              <input
                type="text"
                id="districtVillage"
                name="districtVillage"
                value={formData.districtVillage}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
                placeholder="e.g., Pune / Wagholi"
              />
            </div>

            {/* Preferred Callback Time */}
            <div>
              <label
                htmlFor="preferredCallbackTime"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Preferred Callback Time
              </label>
              <select
                id="preferredCallbackTime"
                name="preferredCallbackTime"
                value={formData.preferredCallbackTime}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white transition duration-200"
              >
                {timeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Message / Query */}
            <div>
              <label
                htmlFor="messageQuery"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message / Query
              </label>
              <textarea
                id="messageQuery"
                name="messageQuery"
                value={formData.messageQuery}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
                placeholder="Tell us what you need help with..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-3 rounded-md font-semibold text-lg shadow-lg hover:bg-purple-800 transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Submit Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CallbackForm;
