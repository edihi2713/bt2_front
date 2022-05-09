import React from "react";
import styles from "../home.module.css";
import Icon from "@mui/material/Icon";

export default function Card({ name, iconName }) {
  return (
    <div className={styles.containerCard}>
        <Icon>{iconName}</Icon>
      <div className={styles.productCardDivider}>
      </div>
        <p>{name}</p>
    </div>
  );
}
