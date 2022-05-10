import React from "react";
import styles from "./home.module.css";

function HomeUser() {
    /* const cards = dataCards.map((card) => {
        return (
            <div key={card.id}>
                <Card name={card.name} iconName={card.iconName} path={card.path} />
            </div>
        );
    }); */

    return <div className={styles.containerHome}>Hola Usuario</div>;
}

export default HomeUser;
