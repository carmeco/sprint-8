import { useState, useEffect } from "react";
import axios from "axios";

export default function useLoadShips(page) {
    const [ships, setShips] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (page < 5) {
            setLoading(true);
            axios
                .get(`https://swapi.dev/api/starships/?page=${page}`)
                .then((res) => {
                    setShips((prev) => [...prev, ...res.data.results]);
                    setLoading(false);
                });
        }
    }, [page]);

    return { ships, loading };
}
