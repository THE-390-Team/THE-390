import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import HomeScreen from "./screens/HomeScreen.js";
import Login from "./components/log/Login.js";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/log/SignUp.js";
import UserProfile from "./components/UserProfile.js";
import LogOut from "./components/log/LogOut";

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
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
