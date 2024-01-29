import React from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
  Link,
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
  <Grid item md={4}>
    <Card
      sx={{
        backgroundColor: "#212121",
        color: "white",
        height: "100%",
        position: "relative",
        "&:hover": {
          boxShadow: "0 0 10px 8px #2196f3",
        },
        transition: "box-shadow 0.3s ease-in-out",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={imgSrc}
        alt={title}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h5" sx={{ mb: 2 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          <strong>Skills Used:</strong> {skillsUsed}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          <strong>Completed:</strong> {completed}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          <strong>Team:</strong> {team}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          <strong>Project Type:</strong> {projectType}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          <strong>Project Link:</strong>{" "}
          <Link href={projectLink} target="_blank" color="primary">
            {projectLink}
          </Link>
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
        backgroundColor: "#121212",
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
          imgSrc="../assets/RollDie.gif"
        />

        <Project
          title="Number Guessing Game"
          skillsUsed="HTML 5, CSS 3, JS"
          completed="June 2022"
          team="Solo"
          projectType="Personal"
          projectLink="https://scorleos773.github.io/Number-Guessing-Game/"
          imgSrc="https://via.placeholder.com/300"
        />

        {/* Add similar Project components for other projects */}
      </Grid>
    </Container>
  );
}

export default Projects;
