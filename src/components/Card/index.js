//from react
import { useEffect, useState } from "react";
import axios from "axios";

//styles
import { Wrapper } from "./Card.styles";

const Card = ({ url, type }) => {
    //hooks
    const [card, setCard] = useState(null);

    //getting data from API
    useEffect(() => {
        axios.get(url).then((res) => {
            if (type === "pilots")
                setCard({
                    title: res.data.name,
                    image: `https://starwars-visualguide.com/assets/img/characters/${url.slice(
                        29,
                        -1
                    )}.jpg`,
                });
            else if (type === "films")
                setCard({
                    title: res.data.title,
                    image: `https://starwars-visualguide.com/assets/img/films/${url.slice(
                        28,
                        -1
                    )}.jpg`,
                });
        });
    }, []);

    return (
        card && (
            <Wrapper>
                <img src={card.image} />
                <p>{card.title}</p>
            </Wrapper>
        )
    );
};

export default Card;
