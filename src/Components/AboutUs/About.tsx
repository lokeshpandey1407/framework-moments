import { Typography, Container, Box } from "@mui/material";
import "./About.css";
import Frame from "../../assets/frameup.jpg";

const About = () => {
  return (
    <div>
      <Box className="box">
        <img src={Frame} alt="Description of the image" className="image" />
      </Box>
      <Container>
        <div className="container">
          <Typography variant="h4" gutterBottom className="fadeIn text-fade-in">
            About Us
          </Typography>
          <Typography variant="body1" paragraph className="fadeIn text-fade-in">
            We are a Boutique Wedding Studio providing a full range of
            professional Wedding Photography & Cinematography to our clients
            across the world. We have been professionally covering weddings for
            13 years and enjoying every moment of it. Our aim is to
            professionally capture the best and most loved moments, without
            losing their originality and natural content. We love to get to know
            our couples and their families and stay friends with them for years.
            We are not just a vendor showing up to do a job. We are Artists
            creating memories for you and your family. We hope you enjoy the
            stories told and hope that your story will be the next.
          </Typography>

          <Typography variant="h4" gutterBottom className="fadeIn text-fade-in">
            WHAT WE DO
          </Typography>
          <Typography variant="body1" paragraph className="fadeIn text-fade-in">
            Luxury Cinematic Wedding Films (we are known for) Pre Wedding Films
            in Bollywood Style.
            <br />
            Destination Weddings <br />
            Candid casual photo shoot for bride and groom <br />
            Fabulous Design of Photo books customized to your style
          </Typography>

          <Typography variant="h4" gutterBottom className="fadeIn text-fade-in">
            HOW WE ARE DIFFERENT
          </Typography>
          <Typography
            variant="body1"
            paragraph
            className="fadeIn text-fade-in rotate-animation"
          >
            With our thoughtful team approach, each individual team member is in
            place to excel in their role – giving you the best services, the
            best coverage quality, and the best albums designed to your
            specifications. At Studio Kelly, World’s Top ranked equipment is
            being used to deliver the best quality to our Clients.
            <br />
            Transforming your imaginations into reality
          </Typography>

          <Typography variant="h4" gutterBottom className="fadeIn text-fade-in">
            ACHIEVEMENTS
          </Typography>
          <Typography variant="body1" paragraph className="fadeIn text-fade-in">
            In the last 13 years, we have shot more than 2000 marriages across
            the world with the love and support from our client. Our
            personalized and high-quality work on photography and cinematography
            was our cause for success. Our highly experienced and unique team is
            our strength. Personalized Quality work on-time delivery is our
            mantra for our success.
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default About;
