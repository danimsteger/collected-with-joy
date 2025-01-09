import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// Type assertion for `getElementById` to ensure `root` is not null
const rootElement = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <main className="dark text-foreground bg-background">
          <App />
        </main>
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { NextUIProvider } from "@nextui-org/react";
// import App from "./App";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// import { React } from "react";
// import ReactDOM from "react-dom/client";
// import { createRoot } from "react-dom/client";
// import { NextUIProvider } from "@nextui-org/react";
// import App from "./App.jsx";
// import "./index.css";
// import Home from "./pages/Home.jsx";
// import NoMatch from "./pages/NoMatch.jsx";
// import { StrictMode } from "react";

// import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";

// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <App />,
// //     errorElement: <NoMatch />,
// //     children: [
// //       {
// //         index: true,
// //         element: <Home />,
// //       },
// //     ],
// //   },
// // ]);
// // ReactDOM.createRoot(document.getElementById("root")).render(
// //   <RouterProvider router={router} />
// // );

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <h1>Hello</h1>
//   </React.StrictMode>
// );
