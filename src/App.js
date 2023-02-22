import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ChakraProvider as ThemeProvider } from "@chakra-ui/react";
import theme from "./theme/index";

import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";

import { DataProvider } from "./providers/DataProvider";
import { AuthProvider } from "./providers/AuthProvider";
import NavHeader from "./components/NavHeader";
import HomePage from "./pages/HomePage";
import EventPage from "./pages/EventPage";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <DataProvider>
            <NavHeader />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/events" element={<EventPage />} />
              <Route path="/signin" element={<SignInPage />} />
            </Routes>
          </DataProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
