//from react
import { useState, useEffect } from "react";

//components
import Layout from "../../components/Layout";

//styles, images and icons
import { Carousel, Slide, Content, Button } from "./Home.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import movies from "../../images/movies";

const Home = () => {
    //hooks
    const [active, setActive] = useState(0);

    useEffect(() => {
        const autoNextMovie = setInterval(nextMovie, 5000);
        return () => clearInterval(autoNextMovie);
    }, []);

    //functions to change movie
    const prevMovie = () => {
        setActive((prev) => (prev > 0 ? prev - 1 : movies.length - 1));
    };

    const nextMovie = () => {
        setActive((prev) => (prev < movies.length - 1 ? prev + 1 : 0));
    };

    return (
        <Layout>
            <Carousel>
                {movies.map((movie, index) => (
                    <Slide image={movie.image} state={index === active}>
                        <Content>
                            <h2>{movie.title}</h2>
                            <p>{movie.description}</p>
                            <button href={movie.url} target="_blank">
                                More info
                            </button>
                        </Content>
                    </Slide>
                ))}
                <Button onClick={() => prevMovie()} left>
                    <FontAwesomeIcon icon={faChevronLeft} size="lg" />
                </Button>
                <Button onClick={() => nextMovie()} right>
                    <FontAwesomeIcon icon={faChevronRight} size="lg" />
                </Button>
            </Carousel>
        </Layout>
    );
};

export default Home;
