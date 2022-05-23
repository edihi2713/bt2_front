import {
  Routes,
  Route
} from "react-router-dom";

import Home from "../components/home"
import Login from "../components/login"
import Register from "../components/register"
import Aforo from "../components/aforo/index"
import HomeUser from "../components/homeUser";
import { ProtectedRoute } from "./protectedRoute";
import FormAforo from '../components/aforo/new people/Form'
import EventsOptions from "../components/aforo/events";
import VerifyAsistents from "../components/aforo/events/components/VerifyAsistents";
import EventListView from '../components/aforo/events/components/index'

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
          <Route path="/new-people" element={<FormAforo />}/>
          <Route path="/events-option" element={<EventsOptions />}/>
          <Route path="/verify-asistents" element={<VerifyAsistents />}/>
          <Route path="/create-events" element={<EventListView />}/>
      </Routes>
);

export default RoutesCollection;
