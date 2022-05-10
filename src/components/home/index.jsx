import React from "react";
import Card from "./components/Card";
import dataCards from "./dataCards";
import styles from "./home.module.css";

function Home() {
  const cards = dataCards.map((card) => {
    return (
      <div key={card.id}>
        <Card name={card.name} iconName={card.iconName} path={card.path} />
      </div>
    );
  });

  return <div className={styles.containerHome}>{cards}</div>;
}

export default Home;
