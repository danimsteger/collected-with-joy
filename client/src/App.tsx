import { useState } from "react";
import "./App.css";
import { NavigateOptions } from "react-router-dom";

import { BrowserRouter, useNavigate, useHref } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { Home } from "./pages/Home.tsx";

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NavigateOptions;
  }
}
function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <>
      <NextUIProvider navigate={navigate} useHref={useHref}>
        <h1>Hello is this working</h1>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </NextUIProvider>
      {/* <h1>Collected With Joy</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </>
  );
}

export default App;
