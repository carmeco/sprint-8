import { useEffect, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ShipContext } from "../../context/shipContext";
import Layout from "../../components/Layout";
import axios from "axios";
import { Wrapper, Image, Details } from "./StarshipDetails.styles";

const StarshipDetails = () => {
    const { ship } = useContext(ShipContext);
    const [image, setImage] = useState(null);
    const navigate = useNavigate();
    const { index } = useParams();

    useEffect(() => {
        if (!ship) navigate("/starships");
        else {
            axios
                .get(
                    `https://starwars-visualguide.com/assets/img/starships/${index}.jpg`
                )
                .then(
                    setImage(
                        `https://starwars-visualguide.com/assets/img/starships/${index}.jpg`
                    )
                )
                .catch(() =>
                    setImage(
                        `https://starwars-visualguide.com/assets/img/big-placeholder.jpg`
                    )
                );
        }
    }, [ship, navigate, index]);

    return (
        <Layout>
            {ship && (
                <Wrapper>
                    {image && <Image alt={ship.name} src={image} />}
                    <Details>
                        <h2>{ship.name}</h2>
                        <ul>
                            <li>
                                <p>Model</p>
                                <p>{ship.model}</p>
                            </li>
                            <li>
                                <p>Cost in credits</p>
                                <p>{ship.cost_in_credits}</p>
                            </li>
                            <li>
                                <p>Atmospheric Speed</p>
                                <p>{ship.max_atmosphering_speed}</p>
                            </li>
                            <li>
                                <p>Manufacturer</p>
                                <p>{ship.manufacturer}</p>
                            </li>
                            <li>
                                <p>Length</p>
                                <p>{ship.length}m</p>
                            </li>
                            <li>
                                <p>Crew</p>
                                <p>{ship.crew}</p>
                            </li>
                        </ul>
                    </Details>
                </Wrapper>
            )}
        </Layout>
    );
};

export default StarshipDetails;