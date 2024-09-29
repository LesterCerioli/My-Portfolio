// src/components/About.js
import { Container, Typography, Grid, styled } from "@mui/material";

const About = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "orange",
        padding: "20px",
        textAlign: "center",
        height: "100vh",
    }));
    
     
  
    return (
    <Container
             
    >
      <Typography variant="h4" color="primary" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" color="textSecondary">
        Hello! I’m Lester Cerioli, a Senior Software Engineer with a passion for building innovative solutions.
        With experience in various technologies and a strong focus on user experience, I thrive in collaborative environments 
        where I can contribute to impactful projects. My goal is to continuously improve my skills and take on new challenges.
      </Typography>
      {/* Você pode adicionar mais conteúdo ou elementos, como imagens ou links */}
    </Container>
  );
};

export default About;
