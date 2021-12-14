//from react
import { useEffect, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

//components
import Layout from "../../components/Layout";
import Cards from "../../components/Cards";

//context
import { ShipContext } from "../../context/shipContext";

//styles
import { Wrapper, Image, Details } from "./StarshipDetails.styles";

const StarshipDetails = () => {
    //shipContext
    const { ship } = useContext(ShipContext);

    //image state
    const [image, setImage] = useState(null);

    //useNavigate and useParams
    const navigate = useNavigate();
    const { index } = useParams();

    //getting data from API
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
                <>
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
                    {ship.pilots.length > 0 && (
                        <Cards array={ship.pilots} title="pilots" />
                    )}
                    {ship.films.length > 0 && (
                        <Cards array={ship.films} title="films" />
                    )}
                </>
            )}
        </Layout>
    );
};

export default StarshipDetails;
