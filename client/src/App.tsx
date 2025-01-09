import React from "react";
import { useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useHref,
  NavigateOptions,
} from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { Home } from "./pages/Home";

// Extend RouterConfig with type declarations for TypeScript
declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NavigateOptions;
  }
}

function App(): JSX.Element {
  // Explicitly type state
  const [count, setCount] = useState<number>(0);

  // Explicitly type navigate (useNavigate from react-router-dom already has appropriate typings)
  const navigate = useNavigate();

  return (
    <>
      <NextUIProvider navigate={navigate} useHref={useHref}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </NextUIProvider>
      {/* 
      <h1>Collected With Joy</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> 
      */}
    </>
  );
}

export default App;

// import { useState } from "react";
// import "./App.css";
// import { NavigateOptions } from "react-router-dom";

// import { BrowserRouter, useNavigate, useHref } from "react-router-dom";
// import { NextUIProvider } from "@nextui-org/react";
// import { Home } from "./pages/Home.tsx";

// declare module "@react-types/shared" {
//   interface RouterConfig {
//     routerOptions: NavigateOptions;
//   }
// }
// // function App() {
// //   const [count, setCount] = useState(0);
// //   const navigate = useNavigate();

// //   return (
// //     <>
// //       <NextUIProvider navigate={navigate} useHref={useHref}>
// //         <h1>Hello is this working</h1>
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //         </Routes>
// //       </NextUIProvider>
// //       {/* <h1>Collected With Joy</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //       </div> */}
// //     </>
// //   );
// // }

// // export default App;
// function App(): JSX.Element {
//   // Explicitly type state
//   const [count, setCount] = useState<number>(0);

//   // Explicitly type navigate (useNavigate from react-router-dom already has appropriate typings)
//   const navigate = useNavigate();

//   return (
//     <>
//       <NextUIProvider navigate={navigate} useHref={useHref}>
//         <h1>Hello is this working</h1>
//         <Routes>
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </NextUIProvider>
//       {/*
//       <h1>Collected With Joy</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//       </div>
//       */}
//     </>
//   );
// }

// export default App;
