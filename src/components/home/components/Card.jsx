import React from "react";
import styles from "../home.module.css";
import Icon from "@mui/material/Icon";

export default function Card({ name, iconName }) {
  console.log(styles);
  return (
    <div>
      <Icon>{iconName}</Icon>
      <p>{name}</p>
    </div>
  );
}
