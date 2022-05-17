import React from "react";
import { useSelector  } from 'react-redux'

function HomeUser() {
    const user = useSelector(state => state.user)
    /* const cards = dataCards.map((card) => {
        return (
            <div key={card.id}>
                <Card name={card.name} iconName={card.iconName} path={card.path} />
            </div>
        );
    }); */

    return <div>Hola {user && user.userEmail}</div>;
}

export default HomeUser;
