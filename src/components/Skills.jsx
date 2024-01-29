import React from "react";
import { Typography, Container, Box, Tooltip } from "@mui/material";

const SkillBadge = ({ skill, imageSrc, color }) => (
  <Tooltip title={skill} arrow>
    <Box
      component="div"
      display="inline-block"
      p={2}
      m={1}
      borderRadius="10px"
      bgcolor={color}
    >
      <img
        src={imageSrc}
        alt={skill}
        style={{ width: "50px", height: "50px" }}
      />
    </Box>
  </Tooltip>
);

function Skills() {
  return (
    <Container
      id="skills"
      sx={{
        textAlign: "center",
        marginBottom: 5,
        paddingBottom: 5,
        marginTop: 5, // added margin from the top
        border: "1px solid #ccc", // added thin border
        borderRadius: "10px", // rounded corners
      }}
    >
      <Typography variant="h4" className="m-5 pt-5 fw-bolder">
        Skills
      </Typography>

      <div className="d-lg-flex g-5 justify-content-between align-items-center">
        <SkillBadge
          skill="C"
          imageSrc="https://img.icons8.com/?size=48&id=40670&format=png"
          color="#1976D2"
        />
        <SkillBadge
          skill="C++"
          imageSrc="https://img.icons8.com/?size=48&id=40669&format=png"
          color="#388E3C"
        />
        <SkillBadge
          skill="JavaScript"
          imageSrc="https://img.icons8.com/?size=48&id=108784&format=png"
          color="#FFC107"
        />
        <SkillBadge
          skill="Java"
          imageSrc="https://img.icons8.com/?size=64&id=FRRACRKRsw2s&format=png"
          color="#E53935"
        />
        <SkillBadge
          skill="Python"
          imageSrc="https://img.icons8.com/?size=80&id=hGdCwhSHUe6L&format=png"
          color="#4CAF50"
        />
        <SkillBadge
          skill="Content Writer"
          imageSrc="https://img.icons8.com/?size=50&id=SuCOeDErfn5u&format=png"
          color="#D81B60"
        />
        <SkillBadge
          skill="Node.js"
          imageSrc="https://img.icons8.com/?size=48&id=54087&format=png"
          color="#8CC84B"
        />
        <SkillBadge
          skill="Express.js"
          imageSrc="https://img.icons8.com/?size=64&id=2ZOaTclOqD4q&format=png"
          color="#6D4C41"
        />
      </div>

      <br />

      <div className="d-lg-flex g-5 justify-content-between align-items-center">
        <SkillBadge
          skill="HTML5"
          imageSrc="https://img.icons8.com/?size=80&id=D2Hi2VkJSi33&format=png"
          color="#1976D2"
        />
        <SkillBadge
          skill="CSS3"
          imageSrc="https://img.icons8.com/?size=80&id=YjeKwnSQIBUq&format=png"
          color="#9C27B0"
        />
        <SkillBadge
          skill="Android Development"
          imageSrc="https://img.icons8.com/?size=48&id=17836&format=png"
          color="#009688"
        />
        <SkillBadge
          skill="ReactJS"
          imageSrc="https://img.icons8.com/?size=80&id=25Sjy8fKExYA&format=png"
          color="#FF5722"
        />
        <SkillBadge
          skill="MongoDB"
          imageSrc="https://img.icons8.com/?size=80&id=8rKdRqZFLurS&format=png"
          color="#4DB33D"
        />
        <SkillBadge
          skill="Material UI"
          imageSrc="https://img.icons8.com/?size=48&id=gFw7X5Tbl3ss&format=png"
          color="#607D8B"
        />
        <SkillBadge
          skill="Chakra UI"
          imageSrc="https://img.icons8.com/?size=48&id=r9QJ0VFFrn7T&format=png"
          color="#FFEB3B"
        />
      </div>
    </Container>
  );
}

export default Skills;
