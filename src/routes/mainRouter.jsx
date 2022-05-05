import {
  Routes,
  Route
} from "react-router-dom";

import Home from "../components/home"
import Login from "../components/login"
import Register from "../components/register"
import Aforo from "../components/Aforo"

const RoutesCollection = (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/aforo" element={<Aforo />} />
      </Routes>
);

export default RoutesCollection;
