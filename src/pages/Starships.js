import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ShipContext } from "../context/shipContext";
import Layout from "../components/Layout";

const Starships = () => {
    const { setShip } = useContext(ShipContext);
    const [ships, setShips] = useState([]);

    useEffect(() => {
        axios
            .get("https://swapi.dev/api/starships/?page=1")
            .then((res) => setShips(res.data.results));
    }, []);

    return (
        <Layout>
            <ul>
                {ships.map((ship, index) => (
                    <li key={index}>
                        <Link
                            to={`/starship-details`}
                            onClick={() => setShip(ship)}
                        >
                            {ship.name}
                            <br />
                            {ship.model}
                        </Link>
                    </li>
                ))}
            </ul>
        </Layout>
    );
};

export default Starships;
