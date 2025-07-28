import React, { useState } from "react";
// Removed specific Lucide-react imports as emojis/text are used in the main app
// If you want to re-enable Lucide-react, ensure it's installed and imported correctly.
// For this component, I'll use placeholders or simple icons/emojis.

import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

// Assuming EnrollDialog is a separate component and will be rendered by the router
// import EnrollDialog from "../components/EnrollDialog"; // This import is no longer needed here

// Re-defining icons as simple strings/emojis for compatibility
const Icons = {
  FileText: "📄", // For Session, Application Form, Plan Details
  MessageCircle: "💬", // For Discussion, WhatsApp support, Call & Chat Support
  GraduationCap: "🎓", // For FY Engineering Support, Live Sessions, Dedicated Mentor
  Calendar: "📅", // For Batch Date, Validity
  Users: "👥", // For 24/7 Admission Support
  BookOpen: "📖", // For Downloadable Resources, Bonus Guide
  Check: "✔️", // For highlights checkmark, included items
  Star: "⭐", // For review stars
  Phone: "📞", // For Request a Callback, phone-based advice
  CreditCard: "💳", // For Enroll Now
  Lightbulb: "💡", // For "More About Standard Package" info box
  MapPin: "📍", // For Ideal For (renamed from Location for clarity)
  Wallet: "💰", // For Government Subsidy Tracker Tool
};

const packages = {
  basic: {
    type: "Basic",
    title: "Basic Agri Counselling Package",
    subtitle:
      "Perfect for small landholders or new farmers seeking basic expert guidance.",
    included: [
      {
        text: "One-time soil & crop advice session (phone-based)",
        icon: Icons.Phone,
      },
      {
        text: "Recommended cropping pattern based on current season",
        icon: Icons.Calendar,
      },
      { text: "WhatsApp support for 7 days", icon: Icons.MessageCircle },
      { text: "Checklist for fertilizers, seeds & tools", icon: Icons.Check },
    ],
    cost: "499",
    originalCost: null,
    validity: "7 Days",
    supportType: "1 phone call + WhatsApp",
    whatYoullGet: null,
    highlights: [
      "Personalized Crop Selection Advice",
      "Basic Fertilizer Use Plan",
      "Free PDF: “Top 5 Mistakes First-Time Farmers Make”",
    ],
    showBatchInfo: false,
    hasReviews: false,
    bonus: null,
  },
  standard: {
    type: "Standard",
    title: "Standard Agri Counselling Package",
    subtitle:
      "Best suited for medium-scale farmers seeking structured support for a full crop cycle.",
    included: [
      {
        text: "Complete seasonal crop planning with expert",
        icon: Icons.GraduationCap,
      },
      {
        text: "Discussion with family (farmer + parent/owner)",
        icon: Icons.MessageCircle,
      },
      {
        text: "Organic vs inorganic input strategy (custom)",
        icon: Icons.Check,
      },
      { text: "Monthly follow-up support via call & chat", icon: Icons.Phone },
      { text: "Guidance on subsidy, government schemes", icon: Icons.FileText },
    ],
    cost: "2,500",
    originalCost: "3,000",
    validity: "30 Days",
    idealFor: "Vegetables, grains, horticulture farms",
    showBatchInfo: true,
    batchDate: "25 May 2025",
    seatsStatus: "Last few seats left!",
    whatYoullGet: [
      "Complete Live Sessions for Admission Process",
      "Exclusive Importance of Branch Sessions",
      "Both Call & Chat Support",
      "Complete Support in FY Engineering",
    ],
    highlights: [
      { text: "24/7 Admission Support", icon: Icons.Users },
      { text: "Downloadable Resources", icon: Icons.BookOpen },
      { text: "Dedicated Mentor", icon: Icons.GraduationCap },
      { text: "FY Engineering Support", icon: Icons.GraduationCap },
    ],
    hasReviews: true,
    reviewData: {
      rating: "4.8/5",
      basedOn: "65 reviews",
      text: "This Counselling Package provided me excellent guidance for my agricultural planning. The support team was very responsive.",
    },
    bonus: null,
  },
  premium: {
    type: "Premium",
    title: "Premium Agri Counselling Package",
    subtitle:
      "Designed for serious farmers or agri-entrepreneurs planning large-scale or long-term farming.",
    included: [
      { text: "Dedicated agri-mentor for 2 months", icon: Icons.GraduationCap },
      { text: "In-depth soil & weather report review", icon: Icons.FileText },
      {
        text: "Farm-specific consultation on irrigation, pest control, and market linkage",
        icon: Icons.MapPin,
      },
      {
        text: "WhatsApp, video call, and voice support",
        icon: Icons.MessageCircle,
      },
      {
        text: "Support for organic transition, certification",
        icon: Icons.Check,
      },
    ],
    cost: "4,800",
    originalCost: null,
    validity: "60 Days",
    whatYoullGet: null,
    highlights: [
      "Customized seasonal crop rotation map",
      "24/7 Expert Help Desk Access",
      "PDF Receipts + Farm Plan Report",
      "Bonus: Government Subsidy Tracker Tool",
    ],
    hasReviews: false,
    showBatchInfo: false,
    bonus: "“Farming for Profit” Guidebook PDF",
  },
};

const AgriCounsellingPackages = () => {
  const [selected, setSelected] = useState("standard");
  const pkg = packages[selected];
  const navigate = useNavigate(); // Initialize navigate hook

  const calculateDiscount = () => {
    if (!pkg.originalCost) return null;
    const discount = Math.round(
      (1 -
        parseFloat(pkg.cost.replace(",", "")) /
          parseFloat(pkg.originalCost.replace(",", ""))) *
        100
    );
    return `${discount}% OFF`;
  };

  // Modified handleEnroll to navigate instead of opening a dialog
  const handleEnroll = () => {
    navigate("/enroll"); // Navigate to the /enroll route
  };

  const handleClick = () => {
    navigate("/callback"); // Navigate to the /callback route
  };

  return (
    <div className="flex flex-col items-center py-10 px-4 sm:px-6 bg-gray-50 min-h-screen font-poppins text-gray-800">
      {/* Removed EnrollDialog component from here */}
      {/* <EnrollDialog
        open={dialogOpen}
        onClose={handleDialogClose}
        onSubmit={handleDialogSubmit}
      /> */}

      {/* Package Selector Buttons */}
      <div className="flex bg-gray-200 rounded-full p-1 mb-10 shadow-inner">
        {Object.keys(packages).map((key) => (
          <button
            key={key}
            onClick={() => setSelected(key)}
            className={`
              px-6 py-2 rounded-full font-semibold text-base transition-all duration-300 ease-in-out
              ${
                selected === key
                  ? "bg-purple-700 text-white shadow-md w-30"
                  : "text-gray-700 hover:bg-gray-300 w-30"
              }
            `}
          >
            {packages[key].type}
          </button>
        ))}
      </div>

      {/* Main Content Title */}
      <h2 className="text-2xl font-semibold mb-8 text-gray-900">
        {pkg.type} Counselling Packages{" "}
      </h2>

      {/* Package Details Container */}
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
        {/* LEFT PANEL */}
        <div className="relative flex-1 p-8 lg:p-10 lg:border-r lg:border-gray-100 flex flex-col">
          {/* Discount Badge */}
          {pkg.originalCost && (
            <div className="absolute top-0 right-0 bg-violet-700 text-white px-5 py-2 rounded-bl-2xl font-semibold text-sm shadow-md">
              {calculateDiscount()}
            </div>
          )}

          {/* Package Title & Subtitle */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {pkg.title}
            </h3>
            <p className="text-gray-600 text-base">{pkg.subtitle}</p>
          </div>

          {/* What's Included Section (Left Panel) */}
          <div className="mb-6">
            <ul className="space-y-4">
              {pkg.included.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start text-gray-700 text-base"
                >
                  {item.icon && (
                    <span className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0">
                      {item.icon}
                    </span>
                  )}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Batch Info (only for Standard as per image, but generalized here) */}
          {pkg.showBatchInfo && (
            <BatchInfo date={pkg.batchDate} status={pkg.seatsStatus} />
          )}

          {/* Cost Section */}
          <div className="border-t border-gray-100 pt-6 mt-6">
            <p className="text-gray-600 text-sm mb-1">Cost</p>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-gray-900 mr-2">
                ₹{pkg.cost}
              </span>
              {pkg.originalCost && (
                <span className="text-base text-gray-500 line-through">
                  ₹{pkg.originalCost}
                </span>
              )}
            </div>
            <p className="text-gray-500 text-xs mt-1">
              (Refund policy applicable)
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 space-y-4">
            <PrimaryButton text="Enroll Now" onClick={handleEnroll} />
            <SecondaryButton
              text="Not sure? Request a callback"
              onClick={handleClick}
            />
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex-[1.2] p-8 lg:p-10 bg-purple-50 flex flex-col">
          <div className="bg-purple-100 rounded-lg p-5 mb-6 text-purple-800 flex items-center shadow-sm">
            <span className="w-6 h-6 mr-3 text-purple-700">💡</span>{" "}
            {/* Using emoji */}
            <h4 className="text-lg font-semibold">
              More About {pkg.type} Package
            </h4>{" "}
          </div>

          {/* "What You'll Get" Section (Only for packages with this specific section) */}
          {pkg.whatYoullGet && (
            <div className="mb-6">
              <h5 className="text-base font-semibold text-gray-800 mb-3">
                What You'll Get
              </h5>
              <ul className="space-y-2">
                {pkg.whatYoullGet.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-gray-700 text-sm"
                  >
                    <span className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0">
                      ✔️
                    </span>{" "}
                    {/* Using emoji */}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Package Highlights Section */}
          <div className="bg-white rounded-lg p-6 mb-6 shadow-md flex-grow">
            <h5 className="text-base font-semibold text-gray-800 mb-3">
              Package Highlights
            </h5>
            <div className="grid grid-cols-1 gap-y-3">
              {pkg.highlights.map((item, idx) => (
                <HighlightItem
                  key={idx}
                  text={item.text || item}
                  icon={item.icon || Icons.Check} // Use Icons.Check if no specific icon
                />
              ))}
            </div>
          </div>

          {/* Student Reviews Section (only for Standard as per image, but conditional) */}
          {pkg.hasReviews && pkg.reviewData ? (
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h5 className="text-base font-semibold text-gray-800 mb-3">
                Student Reviews
              </h5>
              <div className="flex items-center mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="w-5 h-5 text-yellow-500 mr-0.5">
                    ⭐
                  </span> // Using emoji
                ))}
                <span className="font-semibold text-gray-800 ml-2 text-sm">
                  {pkg.reviewData.rating} based on {pkg.reviewData.basedOn}
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">
                "{pkg.reviewData.text}"
              </p>
            </div>
          ) : (
            // Generic section for packages without reviews
            <div className="bg-purple-100 rounded-xl p-6 shadow-md">
              <h4 className="text-lg font-bold text-purple-800 mb-3">
                {pkg.type === "basic"
                  ? "Ready to Start Your Farming Journey?"
                  : "Unlock Your Farm's Full Potential"}
              </h4>
              <p className="text-gray-700 leading-relaxed text-sm">
                {pkg.type === "basic"
                  ? "Our Basic package offers essential guidance to kickstart your agricultural success."
                  : "The Premium package provides unparalleled expert support for large-scale and long-term agricultural prosperity."}
              </p>
              {pkg.bonus && (
                <p className="text-gray-700 text-base mt-4 flex items-center">
                  <span className="w-5 h-5 text-purple-600 mr-2">📖</span>{" "}
                  {/* Using emoji */}
                  🎁 Bonus:{" "}
                  <span className="font-semibold ml-1">{pkg.bonus}</span>
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Reusable Sub-Components ---

// Component for Batch Information
const BatchInfo = ({ date, status }) => (
  <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-md text-yellow-800 flex items-center">
    <span className="w-5 h-5 mr-3 flex-shrink-0">📅</span> {/* Using emoji */}
    <div>
      <p className="font-medium text-sm">Batch Starts {date}</p>
      <p className="text-orange-600 font-semibold text-sm mt-0.5">{status}</p>
    </div>
  </div>
);

const PrimaryButton = ({ text, onClick }) => (
  <button
    className="w-full flex items-center justify-center bg-purple-700 text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-purple-800 transition duration-300 ease-in-out cursor-pointer"
    onClick={onClick}
    type="button"
  >
    {text}
  </button>
);

const SecondaryButton = ({ text, onClick }) => (
  <button
    className="w-full flex items-center justify-center border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer"
    onClick={onClick}
    type="button"
  >
    {text}
  </button>
);

const HighlightItem = (
  { text, icon } // Changed icon: Icon to just icon
) => (
  <div className="flex items-center bg-white border border-purple-100 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 p-2 my-1 group cursor-pointer min-h-[36px]">
    {icon && (
      <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-purple-400 via-purple-600 to-indigo-500 shadow mr-2 group-hover:scale-105 transition-transform duration-200">
        <span className="w-4 h-4 text-white">{icon}</span> {/* Render emoji */}
      </div>
    )}
    <span className="text-gray-800 text-xs font-medium text-left">{text}</span>
  </div>
);

export default AgriCounsellingPackages;
