import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Header from "./components/common/Header";
import Plans from "./pages/Plans";
import HomePage from "./pages/HomePage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage></HomePage>,
//     children: [
//       {
//         path: "plans",
//         element: <Plans></Plans>,
//       },
//     ],
//   },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
