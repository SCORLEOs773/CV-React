import React from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

const Project = ({
  title,
  skillsUsed,
  completed,
  team,
  projectType,
  projectLink,
  imgSrc,
}) => (
  <Grid item md={6}>
    <Card sx={{ backgroundColor: "#343a40", color: "white" }}>
      <CardContent>
        <Typography variant="h3" sx={{ mb: 5 }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Skills Used:</strong> {skillsUsed}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Completed:</strong> {completed}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Team:</strong> {team}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Project Type:</strong> {projectType}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Project Link:</strong>{" "}
          <a href={projectLink} target="blank" style={{ color: "white" }}>
            {projectLink}
          </a>
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={projectLink} variant="outlined" color="primary">
          View Project
        </Button>
      </CardActions>
    </Card>
  </Grid>
);

function Projects() {
  return (
    <Container
      id="projects"
      sx={{
        textAlign: "center",
        py: 5,
        backgroundColor: "#343a40",
        color: "white",
      }}
    >
      <Typography variant="h2" className="m-5 p-5 fw-bolder">
        Projects
      </Typography>

      <Grid container spacing={4}>
        <Project
          title="Roll and Die Game"
          skillsUsed="HTML 5, CSS 3, JS"
          completed="June 2022"
          team="Solo"
          projectType="Personal"
          projectLink="https://scorleos773.github.io/Roll-and-Die/"
          imgSrc="./Project 1 img.png"
        />

        <Project
          title="Number Guessing Game"
          skillsUsed="HTML 5, CSS 3, JS"
          completed="June 2022"
          team="Solo"
          projectType="Personal"
          projectLink="https://scorleos773.github.io/Number-Guessing-Game/"
          imgSrc="./Project 2 img.png"
        />
      </Grid>
    </Container>
  );
}

export default Projects;
