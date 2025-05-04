import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider, Navigate } from "react-router";
import App from './App.jsx'
import Destination from './Destination.jsx';
import Crew from './Crew.jsx';
import Technology from './Technology.jsx';

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/home" replace /> },
  { path: "/home", element: <App /> },
  { path: "/destination", element: <Destination /> },
  { path: "/crew", element: <Crew /> },
  { path: "/technology", element: <Technology /> }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
