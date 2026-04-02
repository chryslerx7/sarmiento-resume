import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="./Portfolio.jsx" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
