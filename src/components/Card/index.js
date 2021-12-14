//from react
import { useEffect, useState } from "react";
import axios from "axios";

//styles
import { Wrapper } from "./Card.styles";

const Card = ({ url }) => {
    const [card, setCard] = useState(null);
    const index = url.slice(29, -1);

    useEffect(() => {
        axios.get(url).then((res) =>
            setCard({
                ...res.data,
                image: `https://starwars-visualguide.com/assets/img/characters/${index}.jpg`,
            })
        );
    }, []);

    return (
        card && (
            <Wrapper>
                <img src={card.image} />
                <p>{card.name}</p>
            </Wrapper>
        )
    );
};

export default Card;
