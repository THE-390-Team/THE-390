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
//import PropertyCard from "./components/property/PropertyCard.js";
import CreateUnit from "./components/createProperty/CreateUnit.js";
import CreateParking from "./components/createProperty/CreateParking.js";
import CreateLocker from "./components/createProperty/CreateLocker.js";
import CreateProperty from "./components/createProperty/CreateProperty.js";

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
            <Route path="/create-unit" element={<CreateUnit />} />
            <Route path="/create-parking" element={<CreateParking />} />
            <Route path="/create-locker" element={<CreateLocker />} />
            {/* <Route path="/property-card" element={<PropertyCard />} /> */}
            {/* TODO id hard coded until db connection is made should be path="/property-page/:propertyId" with no prop*/}
            <Route path="/property-page/:propertyId" element={<PropertyPage />} />
            <Route path="/create-property" element={<CreateProperty />} />

          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
