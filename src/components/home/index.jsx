import React from "react";
import Box from "@mui/material/Box";
import Card from "./components/Card";
import dataCards from "./dataCards";

function Home() {
  const cards = dataCards.map((card) => {
    return (
      <div key={card.id}>
        <Card name={card.name} iconName={card.iconName} />
      </div>
    );
  });

  return (
    <Box>
      <div className="home-container">{cards}</div>
    </Box>
  );
}

export default Home;
