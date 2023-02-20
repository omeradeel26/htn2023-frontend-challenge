import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { DataProvider } from "./providers/DataProvider";
import { AuthProvider } from "./providers/AuthProvider";
import NavHeader from "./components/NavHeader";
import HomePage from "./pages/HomePage";
import EventPage from "./pages/EventPage";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <Router>
      <AuthProvider>
        <DataProvider>
          <div style={{ width: "100%", height: "100%" }}>
            <NavHeader />
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/events" element={<EventPage/>} />
              <Route path="/signin" element={<SignInPage/>} />
            </Routes>
          </div>
        </DataProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
