import { Route, Routes } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Uploads from "./pages/Uploads";
import Favorites from "./pages/Favorites";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className=" min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/uploads" element={<Uploads />} />
          <Route path="/favourites" element={<Favorites />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
};

export default App;
