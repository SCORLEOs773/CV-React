import React from "react";
import { Container, Typography, Link } from "@mui/material";

function Footer() {
  return (
    <footer
      className="p-5 text-light text-center position-relative"
      style={{ backgroundColor: "darkslategray" }}
    >
      <Container>
        <Typography variant="body1" className="lead">
          Copyright &copy; A SUKHAD SHARMA PRODUCTION
        </Typography>

        <Link href="#" className="position-absolute bottom-0 end-0 p-5">
          {/* You can uncomment the following line if you want to add an arrow icon */}
          {/* <i className="bi bi-arrow-up-circle h1"></i> */}
        </Link>
      </Container>
    </footer>
  );
}

export default Footer;
