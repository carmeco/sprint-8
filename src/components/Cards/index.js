//components
import Card from "../Card";

//styles
import { Wrapper, Grid } from "./Cards.styles";

const Cards = ({ array, title }) => {
    return (
        <Wrapper>
            <h3>{title}</h3>
            <Grid>
                {array.map((item, index) => (
                    <Card key={index} url={item} type={title} />
                ))}
            </Grid>
        </Wrapper>
    );
};

export default Cards;
