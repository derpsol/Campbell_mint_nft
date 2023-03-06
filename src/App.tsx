import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Home, PendingMotion, ViewBase } from "./views";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/pending"
          element={
            <ViewBase>
              <PendingMotion />
            </ViewBase>
          }
        />
        <Route
          path="/"
          element={
            <ViewBase>
              <Home />
            </ViewBase>
          }
        />
      </Routes>
    </>
  );
}

export default App;
