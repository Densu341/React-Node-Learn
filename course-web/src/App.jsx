import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import TestimonialPage from "./pages/TestimonialPage";
import SyaratKetenPage from "./pages/SyaratKetenPage";
import FaqPage from "./pages/FaqPage";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/services" Component={ServicesPage} />
        <Route path="/testimonial" Component={TestimonialPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/syaratketen" Component={SyaratKetenPage} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
