import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate, // Ensure this is imported
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/home" element={<Home />} /> {/* Changed from path="" to avoid conflict; adjust if needed */}
      <Route index element={<Navigate to="/home" replace />} />
      
      {/* Public routes (no auth required) */}
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/signin" element={<SigninPage />} />
      
      {/* Protected routes (require login) */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      
      {/* Other potentially protected routes - wrap in ProtectedRoute if they need auth */}
      <Route path="/NewResume" element={<NewResume />} />
      <Route path="/ResumeData" element={<ResumeBuilder />} />
      <Route path="/templates" element={<Template />} />
      <Route path="/my-resume/:resumeId/view" element={<ViewResume />} />
      
      {/* Optional: Catch-all for 404 */}
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
