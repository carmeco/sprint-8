import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";

const Starships = () => {
    const [ships, setShips] = useState([]);
    useEffect(() => {
        axios
            .get("https://swapi.dev/api/starships/")
            .then((res) => setShips(res.data.results));
    }, []);
    return (
        <Layout>
            <ul>
                {ships.map((ship) => (
                    <li>
                        {ship.name}
                        <br />
                        {ship.model}
                    </li>
                ))}
            </ul>
        </Layout>
    );
};

export default Starships;
