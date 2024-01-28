import React from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";

function Navbar() {
  const handleHover = (event) => {
    event.target.innerHTML = "PORTFOLIO";
  };

  const handleHoverOut = (event) => {
    event.target.innerHTML = "SUKHAD SHARMA";
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#2196f3" }}>
      <Container>
        <Toolbar sx={{ padding: 0 }}>
          <Typography
            variant="h4"
            sx={{
              flexGrow: 1,
              fontFamily: "Arial, sans-serif",
              transition: "0.3s",
              cursor: "pointer",
              color: "#1a237e", // Darker text color for the name
            }}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
          >
            SUKHAD SHARMA
          </Typography>
          <div sx={{ display: "flex", gap: 2 }}>
            <Button
              color="inherit"
              href="#about"
              sx={{
                "&:hover": { backgroundColor: "#1565c0" }, // Lighter hover color
                textTransform: "none",
                color: "#1a237e", // Darker text color for buttons
              }}
            >
              About
            </Button>
            <Button
              color="inherit"
              href="#education"
              sx={{
                "&:hover": { backgroundColor: "#1565c0" },
                textTransform: "none",
                color: "#1a237e",
              }}
            >
              Education
            </Button>
            <Button
              color="inherit"
              href="#experience"
              sx={{
                "&:hover": { backgroundColor: "#1565c0" },
                textTransform: "none",
                color: "#1a237e",
              }}
            >
              Experience
            </Button>
            <Button
              color="inherit"
              href="#certifications"
              sx={{
                "&:hover": { backgroundColor: "#1565c0" },
                textTransform: "none",
                color: "#1a237e",
              }}
            >
              Certifications
            </Button>
            <Button
              color="inherit"
              href="#skills"
              sx={{
                "&:hover": { backgroundColor: "#1565c0" },
                textTransform: "none",
                color: "#1a237e",
              }}
            >
              Skills
            </Button>
            <Button
              color="inherit"
              href="#projects"
              sx={{
                "&:hover": { backgroundColor: "#1565c0" },
                textTransform: "none",
                color: "#1a237e",
              }}
            >
              Projects
            </Button>
            <Button
              color="inherit"
              href="#contact"
              sx={{
                "&:hover": { backgroundColor: "#1565c0" },
                textTransform: "none",
                color: "#1a237e",
              }}
            >
              Contact
            </Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
