import { useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { ShipContext } from "../context/shipContext";
import Layout from "../components/Layout";

const StarshipDetails = () => {
    const { ship } = useContext(ShipContext);
    const navigate = useNavigate();

    useEffect(() => {
        !ship && navigate("/starships");
    }, [ship, navigate]);

    return (
        <Layout>
            {ship && (
                <div>
                    <h2>{ship.name}</h2>
                    <ul>
                        <li>Model: {ship.model}</li>
                        <li>Cost in credits: {ship.cost_in_credits}</li>
                        <li>
                            Atmospheric Speed: {ship.max_atmosphering_speed}
                        </li>
                        <li>Manufacturer: {ship.manufacturer}</li>
                        <li>Length: {ship.length}m</li>
                        <li>Crew: {ship.crew}</li>
                    </ul>
                </div>
            )}
        </Layout>
    );
};

export default StarshipDetails;
