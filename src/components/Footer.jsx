import React from "react";
import { Container, Typography } from "@mui/material";

function Footer() {
  return (
    <footer
      className="py-5 text-light text-center"
      style={{ backgroundColor: "#2c3e50" }}
    >
      <Container
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography variant="body1" sx={{ color: "#fff", fontSize: "1.2rem" }}>
          &copy; {new Date().getFullYear()} | A SUKHAD SHARMA PRODUCTION |
          Privacy Policy . Terms of Service . Contact Us
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
