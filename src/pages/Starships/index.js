//from react
import { useState, useContext, useCallback, useRef } from "react";
import { Link } from "react-router-dom";

//components
import Layout from "../../components/Layout";

//custom hooks and context
import { ShipContext } from "../../context/shipContext";
import useLoadShips from "../../hooks/useLoadShips";

//styless
import { List, Spinner } from "./Starships.styles";

const Starships = () => {
    //states for loading ships
    const [page, setPage] = useState(1);
    const { ships, loading } = useLoadShips(page);

    //shipContext
    const { setShip } = useContext(ShipContext);

    //getting data on scroll
    const observer = useRef();
    const lastShip = useCallback(
        (node) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && page < 5) {
                    setPage((prev) => prev + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [loading, page]
    );

    return (
        <Layout>
            <List>
                {ships.map((ship, index) => (
                    <Link
                        key={index}
                        ref={ships.length === index + 1 ? lastShip : null}
                        to={`${ship.url.slice(26)}`}
                        onClick={() => setShip(ship)}
                    >
                        <p>{ship.name}</p>
                        <p>{ship.model}</p>
                    </Link>
                ))}
                {loading && (
                    <Spinner
                        alt="spinner"
                        src="https://static-mh.content.disney.io/starwars/assets/shared/loader_empire-985b0940808a.png"
                        role="status"
                    />
                )}
            </List>
        </Layout>
    );
};

export default Starships;
