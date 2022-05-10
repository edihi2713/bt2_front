import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div className={styles.containerNavBar}>
      <Link to="/" className="text-link">
        <Button color="inherit">Bienvenido a B2C</Button>{" "}
      </Link>
      <div>
        <Link to="/login" className="text-link">
          <Button color="inherit">Ingresar</Button>{" "}
        </Link>
        <Link to="/register" className="text-link">
          <Button color="inherit">Registrarse</Button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
