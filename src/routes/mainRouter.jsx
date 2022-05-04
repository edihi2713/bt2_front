import {
  Routes,
  Route
} from "react-router-dom";

import Home from "../components/home"
import Login from "../components/login"
import Register from "../components/register"

const RoutesCollection = (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
);

export default RoutesCollection;
