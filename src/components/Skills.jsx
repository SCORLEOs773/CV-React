import React from "react";
import { Typography, Container, Box } from "@mui/material";

const SkillBadge = ({ skill, color }) => (
  <Box
    component="h1"
    display="inline-block"
    p={2}
    m={1}
    borderRadius="10px"
    bgcolor={color}
  >
    {skill}
  </Box>
);

function Skills() {
  return (
    <Container
      id="skills"
      sx={{ textAlign: "center", marginBottom: 5, paddingBottom: 5 }}
    >
      <Typography variant="h4" className="m-5 pt-5 fw-bolder">
        Skills
      </Typography>

      <div className="d-lg-flex g-5 justify-content-between align-items-center">
        <SkillBadge skill="Cascading Style Sheets" color="primary.main" />
        <SkillBadge skill="Java Script" color="success.main" />
        <SkillBadge skill="Boot Strap 5" color="error.main" />
        <SkillBadge skill="Project Management" color="dark.main" />
      </div>

      <br />

      <div className="d-lg-flex g-5 justify-content-between align-items-center">
        <SkillBadge skill="HTML 5" color="dark.main" />
        <SkillBadge skill="Team Management" color="secondary.main" />
        <SkillBadge skill="Content Development" color="warning.main" />
        <SkillBadge skill="Public Speaking" color="primary.main" />
      </div>
    </Container>
  );
}

export default Skills;
