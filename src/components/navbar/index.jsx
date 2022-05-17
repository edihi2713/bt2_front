import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { useSelector,useDispatch  } from 'react-redux'
import {login} from '../../features/user/userSlice'
import { useNavigate } from "react-router-dom"


function Navbar() {
  const {token} = useSelector(state => state.user)
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const closeSession = (e) => {
    dispatch(login({userEmail:'', token: ''}));
    return navigate("/");
  };

  return (
    <div className={styles.containerNavBar}>
      <Link to="/" className="text-link">
        <Button color="inherit">Bienvenido a B2C</Button>{" "}
      </Link>
      {token ?
        <div>
          <Link to="/dashboard" className="text-link">
            <Button color="inherit">Opciones</Button>{" "}
          </Link>
            <Button color="inherit" onClick={closeSession}>Cerrar Sesión</Button>{" "}
        </div>
      :<div>
        <Link to="/login" className="text-link">
          <Button color="inherit">Ingresar</Button>{" "}
        </Link>
        <Link to="/register" className="text-link">
          <Button color="inherit">Registrarse</Button>{" "}
        </Link>
      </div>}
  
    </div>
  );
}

export default Navbar;
