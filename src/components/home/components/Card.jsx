import React from "react";
import styles from "../home.module.css";
import Icon from "@mui/material/Icon";
import { Link } from "react-router-dom";

export default function Card({ name, iconName }) {
  return (
    <div className={styles.containerCard}>

      {/* Pendiente definir que clase de imagen o icono va a ir acá y la forma en que se va a cargar, si desde local o desde donde */}
      <Icon sx={{ fontSize: "70px" }}>{iconName}</Icon> 
      <div>
        <div className={styles.productCardDivider}></div>
        <Link to="/register" className="text-link">
          <p className={styles.text}>{name}</p>
        </Link>
      </div>
    </div>
  );
}
