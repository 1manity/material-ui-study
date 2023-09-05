import TourCard from "./TourCard";
import {Container, Grid} from "@mui/material";

import cities from "./data.js"
import Typography from "@mui/material/Typography";
function TourNavigation() {
    return (
        <>
            <Container>
                {cities.map((city)=>
                        <div key={city.id}>
                            <Typography variant={"h4"} component={"h2"} marginTop={5} marginBottom={3}>
                                Top {city.name} Tours
                            </Typography>
                            <Grid container spacing={5}>
                                {city.tours.map((tour)=> {
                                    return  <TourCard tour={tour} />
                                })}
                            </Grid>
                        </div>
                )}

            </Container>
        </>
    )
}

export default TourNavigation;