import React from "react";
import {
  Typography,
  Paper,
  Container,
  Grid,
  Box,
  Avatar,
  Button,
} from "@mui/material";
import aboutImg from "../assets/Profile Pic.jpg";
import MyCV from "../assets/Resume 2024.pdf";

function AboutMe() {
  const downloadCV = () => {
    // Implement the logic to trigger the download of the CV PDF
    const link = document.createElement("a");
    link.href = MyCV;
    link.download = "SukhadSharma_CV.pdf";
    link.click();
  };

  return (
    <Container id="about" sx={{ mt: 5, pt: 5 }}>
      <Paper elevation={5} sx={{ padding: 4, mt: 5, borderRadius: 12 }}>
        <Typography
          variant="h2"
          align="center"
          fontWeight="bold"
          sx={{ mb: 5 }}
        >
          Professional Profile
        </Typography>

        <Grid container spacing={4}>
          <Grid item md={5}>
            <Box display="flex" justifyContent="center">
              <Avatar
                src={aboutImg}
                alt="Profile Pic"
                sx={{ width: 200, height: 200 }}
              />
            </Box>
            <Box display="flex" justifyContent="center" mt={2}>
              <Button variant="contained" color="primary" onClick={downloadCV}>
                Download CV
              </Button>
            </Box>
          </Grid>
          <Grid item md={7}>
            <Typography
              variant="body1"
              sx={{ textAlign: { xs: "center", md: "start" } }}
            >
              I am <strong>SUKHAD SHARMA</strong>, a dedicated and passionate
              individual pursuing a Bachelor's degree in Computer Science with a
              focus on Full Stack Software Development. My academic journey has
              equipped me with a strong foundation in computer science and honed
              my skills in full-stack development.
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: { xs: "center", md: "start" }, mt: 2 }}
            >
              With a proactive attitude, I stay updated with the latest
              technologies and industry trends. My goal is to contribute
              innovative solutions to real-world problems through software
              development. I have a keen interest in areas such as digital
              transformation, data analytics, and deep learning.
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: { xs: "center", md: "start" }, mt: 2 }}
            >
              Committed to continuous learning, I actively participate in
              certifications and projects to enhance my skills. As a dynamic and
              adaptable individual, I am eager to collaborate with like-minded
              professionals and contribute to impactful projects.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default AboutMe;
