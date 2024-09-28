import { useState } from "react";
import { Container, styled, Typography, Grid, Button, Box } from "@mui/material";
import LinkedinPhoto from "../../../../assets/images/linkedin_photo.jpeg";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {
  // State to handle showing the email
  const [showEmail, setShowEmail] = useState(false);

  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    padding: "20px",
    textAlign: "center",
    height: "100vh",
  }));

  const StyledImg = styled("img")(() => ({
    width: "100%",
    maxWidth: "200px",
    borderRadius: "50%",
  }));

  // Function to handle email button click
  const handleEmailClick = () => {
    // Toggle the visibility of the email
    setShowEmail((prev) => !prev);
    
    // Open the default email client
    if (!showEmail) {
      window.open("mailto:lesterlucasit@hotmail.com?subject=Contact%20Lester%20Cerioli&body=Hello%20Lester,%20I%20would%20like%20to%20discuss%20an%20opportunity.");
    }
  };

  return (
    <StyledHero>
      <Container maxWidth="md">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4}>
            <StyledImg src={LinkedinPhoto} alt="LinkedIn Photo" />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography color="primary" variant="h4" textAlign="center" component="h1" gutterBottom>
              Lester Cerioli
            </Typography>
            <Typography color="primary" variant="h6" textAlign="center">
              Senior Software Engineer
            </Typography>

            <Box mt={2}>
              <Button
                startIcon={<DownloadIcon />}
                variant="outlined"
                color="primary"
                style={{ marginRight: "10px" }}
              >
                Download CV
              </Button>

              {/* Button to reveal/hide email and open email client */}
              <Button
                startIcon={<EmailIcon />}
                variant="contained"
                color="primary"
                onClick={handleEmailClick} // Toggle email visibility on click
              >
                Contact me
              </Button>

              {/* Show email when button is clicked */}
              {showEmail && (
                <Typography color="primary" variant="body1" mt={2}>
                  lesterlucasit@hotmail.com
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
