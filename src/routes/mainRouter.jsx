import {
  Routes,
  Route
} from "react-router-dom";

import Home from "../components/home"
import Login from "../components/login"
import Register from "../components/register"
import Aforo from "../components/capacity/index"
import HomeUser from "../components/homeUser";
import { ProtectedRoute } from "./protectedRoute";

const RoutesCollection = (
      <Routes>
          <Route exact path="/"  element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/aforo" element={<Aforo />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <HomeUser />
              </ProtectedRoute>
            }
          />
          <Route path="/*" element={<Aforo />} />
      </Routes>
);

export default RoutesCollection;
