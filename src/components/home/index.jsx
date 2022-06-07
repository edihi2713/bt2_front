import React from "react";
import Card from "../Card";
import dataCards from "../dataCards";
import styles from "./home.module.css";
import { useSelector } from 'react-redux'
import WelcomeScreen from "./WelcomeScreen.jsx";

function Home() {
  return <div className={styles.containerHome}>
    <WelcomeScreen/>
  </div>;
}

export default Home;
