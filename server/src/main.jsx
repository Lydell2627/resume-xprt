import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "./Component/Home/Home.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"; // Removed unused Navigate

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={
        <div style={{ backgroundColor: 'white', color: 'red', fontSize: '24px', padding: '20px' }}>
          Hello, this is a test! If you see this, routing works.
        </div>
      } />
      <Route path="/home" element={<Home />} />
    </Route>
  )
);

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

console.log('App rendered'); // Add this for debugging
