import React from "react";
import {
  Typography,
  Container,
  Paper,
  Button,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";

const CertificationCard = ({
  title,
  issuer,
  issuedOn,
  credentialsId,
  link,
}) => {
  return (
    <Card sx={{ width: "100%", height: "100%", backgroundColor: "#f8f9fa" }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Issued by:</strong> {issuer}
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Issued on:</strong> {issuedOn}
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Credentials ID:</strong> {credentialsId}
        </Typography>
        <Button href={link} target="_blank" variant="contained">
          Show Certification
        </Button>
      </CardContent>
    </Card>
  );
};

function Certifications() {
  const certificationsData = [
    {
      title: "Introduction to Digital Transformation With Google Cloud",
      issuer: "Google Cloud - Minnesota",
      issuedOn: "Jun 2022 - Present (No Expiration)",
      credentialsId: "1655958",
      link: "https://www.cloudskillsboost.google/public_profiles/c8977800-ea88-4dba-af62-ec68827d6f85/badges/1655958?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    },
    {
      title: "Scientist For A Day",
      issuer: "NASA",
      issuedOn: "Jan 2022 - Present (No Expiration)",
      link: "https://drive.google.com/file/d/1x7r9MBbGKzto1Cvq1tBtaXWHNylOfhZo/view?usp=sharing",
    },
    {
      title: "Advanced Google Analytics",
      issuer: "Google",
      issuedOn: "Dec 2021 - Present (No Expiration)",
      link: "https://analytics.google.com/analytics/academy/certificate/vnbKxxAaQwm4dblqTIvFxw",
    },
    {
      title: "Introduction To Data Studio",
      issuer: "Google",
      issuedOn: "Dec 2021 - Present (No Expiration)",
      link: "https://analytics.google.com/analytics/academy/certificate/fbmPaOk9TyGIeKowhuwVAg",
    },
    {
      title: "Introduction to Deep Learning",
      issuer: "Great Learning",
      issuedOn: "Nov 2021 - Present (No Expiration)",
      link: "https://olympus1.mygreatlearning.com/course_certificate/CQGDUCIM",
    },
    {
      title: "Data Science Foundations",
      issuer: "Great Learning",
      issuedOn: "Oct 2021 - Present (No Expiration)",
      link: "https://olympus1.mygreatlearning.com/course_certificate/YSTDDXPQ",
    },
    {
      title: "Python For Machine Learning",
      issuer: "Great Learning",
      issuedOn: "Oct 2021 - Present (No Expiration)",
      link: "https://olympus1.mygreatlearning.com/course_certificate/ZUARDXWT",
    },
    // Add other certification data here
  ];

  return (
    <Container
      id="certifications"
      sx={{
        py: 5,
        textAlign: "center",
        background:
          "linear-gradient(to right, #ff6f61, #77c7f7, #6ac98d, #ffd166, #fb934d)",
        animation: "gradientShift 20s infinite alternate",
        color: "#ffffff",
      }}
    >
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h4" align="center">
          Licences and Certifications
        </Typography>

        <Carousel
          sx={{
            width: "80%",
            margin: "0 auto",
            backgroundColor: "#fb934d",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          {certificationsData.map((certification, index) => (
            <Box key={index} display="flex" justifyContent="center">
              <CertificationCard {...certification} />
            </Box>
          ))}
        </Carousel>
      </Paper>

      <style>
        {`
          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 100% 50%;
            }
          }
        `}
      </style>
    </Container>
  );
}

export default Certifications;
