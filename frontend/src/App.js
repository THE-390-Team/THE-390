import React from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import HomeScreen from "./screens/HomeScreen.js";
import Login from "./components/log/Login.js";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/log/SignUp.js";
import UserProfile from "./components/userProfile/UserProfile.js";
import LogOut from "./components/log/LogOut";
import PropertyCard from "./components/property/PropertyCard.js";
import DashBoard from "./components/dashboard/DashBoard.js";
import PropertyPage from "./components/property/PropertyPage.js";


function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/property-card" element={<PropertyCard />} />
            <Route path="/dashboard" element={<DashBoard />} />
            {/* TODO id hard coded until db connection is made should be path="/property-page/:propertyId" with no prop*/}
            <Route path="/property-page" element={<PropertyPage id={"1"}/>} />

          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
