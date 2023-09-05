import {Box, createTheme, Grid, Paper, Rating, ThemeProvider, Typography} from "@mui/material";
import {AccessTime} from "@mui/icons-material";
import { Link } from "react-router-dom";
const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2",
                    },
                    style: {
                        fontSize: 9,
                        // backgroundColor: "blue"
                    }
                }
            ]
        }
    }
});

function TourCard({tour}) {
    return (
        <Grid item xs={3}>
            <Link to={`/${tour.id}`} key={tour.id} style={{textDecoration:"none"}}>
            <ThemeProvider theme={theme}>
                <Paper elevation={3}>
                    <img
                        src={tour.image}
                        alt={""}
                        className={"img"}
                    />
                    <Box>
                        <Typography variant={"subtitile1"} component={"h2"}>
                            {tour.name}
                        </Typography>
                    </Box>
                    <Box sx={{display: "flex", alignItems: "center"}}>
                        <AccessTime sx={{width: 15}}/>
                        <Typography variant={"body2"} component={"p"} marginLeft={0.2}>
                            {tour.duration} hours
                        </Typography>
                    </Box>
                    <Box sx={{display: "flex", alignItems: "center",}} marginTop={3}>
                        <Rating name={"read-only"} value={tour.rating} precision={0.5} size={"small"}></Rating>
                        <Typography variant={"body2"} component={"p"} marginLeft={0.5}>
                            {tour.rating}
                        </Typography>
                        <Typography variant={"body3"} component={"p"} marginLeft={1.5}>
                            ({tour.numberOfReviews} reviews)
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant={"h6"} component={"h3"} marginLeft={0}>
                            From C ${tour.price}
                        </Typography>
                    </Box>
                </Paper>
            </ThemeProvider>
            </Link>
        </Grid>
    )
}

export default TourCard;