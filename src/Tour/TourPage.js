import {Container ,Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import TourImageList from "./TourImageList";
import ControlledAccordions from "./ControlledAccordions";

export default function TourPage() {

    return <Container sx={{width:900}}>
        <Typography variant={"h3"} component={"h1"} marginTop={3}>
            Explore the World in Vegas
        </Typography>
        <Box marginTop={3} sx={{display: "flex"}}>
            <img src={"https://media.timeout.com/images/105124791/750/422/image.jpg"}
                alt={""}
                 height={325}
            />
            <TourImageList />
        </Box>
        <Typography variant="h6" component="h4" marginTop={3}>
            About this ticket
        </Typography>
        <Box sx={{ display: "flex" }}>
            <Typography variant="paragraph" component="p" marginY={3}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                voluptates rem quos delectus debitis earum modi, ipsum veritatis.
                Perferendis officiis nobis, aut hic praesentium nulla vero, possimus
                omnis reprehenderit blanditiis quis incidunt minima voluptatibus illum
                quam corporis libero fugiat doloremque. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Exercitationem officiis commodi beatae
                animi incidunt necessitatibus aut provident ad ex. Saepe!
            </Typography>
        </Box>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
            Frequently Asked Questions
        </Typography>
        <ControlledAccordions />
    </Container>
}