import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import ErrorBoundary from "./Components/errorBoundary"
import RootLayout from "./Pages/RootLayout";
import Home from "./Pages/Home";
import { lazy, Suspense } from "react";



function App() {

  const Register = lazy(() => import("./Pages/Register"))
  const NotFound = lazy(() => import("./Pages/NotFound"))
  const Login = lazy(() => import("./Pages/login"))
  const Signup = lazy(() => import("./Pages/signup"))




  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      path: "/",
      children: [
        { index: true, element: <Home /> },
        {
          path: "register", element:
            <Suspense fallback={<div>Loading...</div>}>
              <Register />
            </Suspense>
        },
        {
          path: "login", element:
            <Suspense fallback={<div>Loading...</div>}>
              <Login />
            </Suspense>
        },
        {
          path: "signup", element:
            <Suspense fallback={<div>Loading...</div>}>
              <Signup />
            </Suspense>
        },
        {
          path: "*", element:
            <Suspense fallback={<div>Loading...</div>}>
              <NotFound />
            </Suspense>
        }

      ]
    }])

  return (
    <ErrorBoundary>
      <RouterProvider router={router} />

    </ErrorBoundary>
  );
}
export default App;
