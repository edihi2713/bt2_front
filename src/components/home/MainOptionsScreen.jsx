import React, { useEffect } from "react";
import Card from "../Card";
import dataCards from "../dataCards";
import styles from "./home.module.css";
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

function MainOptionsScreen() {
    const user = useSelector(state => state.user);
    let navigate = useNavigate();

    useEffect(() => {
        if(user.selectedChurchId === ""){
            return navigate("/");
          }
    },[])
    const cards = dataCards.map((card) => {
      return (
        <> 
        { (!card.isGuestRoute && user.userEmail) || card.isGuestRoute ? 
        <div key={card.id}>
          <Card name={card.name} iconName={card.iconName} path={card.path} />
        </div> : null
        }
        </>
      );
    });
  
    return <div className={styles.containerHome}>{cards}</div>;
}

export default MainOptionsScreen