import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import Dashboard from "./pages/Dashboard";
import CreatePost from "./pages/CreatePost";
import ItemDetails from "./pages/itemDetails";
import Order from "./pages/Order";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/item/:itemId" element={<ItemDetails/>} />

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/order" element={<Order />} />
        </Route>

        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/create-post" element={<CreatePost />} />
          
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
