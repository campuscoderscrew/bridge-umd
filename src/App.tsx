import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import OfficersPage from "./pages/OfficersPage";
import Error404 from "./pages/Error404";
import "./index.css";

function App() {
  return (
    <Router>
      <NavigationBar />
      <main style={{ width: "100%" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/officers" element={<OfficersPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
