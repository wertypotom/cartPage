import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import RootPage from "./pages/RoutePage/RoutePage";

function App() {
  return (
    <div>
      <Router>
        <RootPage />
      </Router>
    </div>
  );
}

export default App;
