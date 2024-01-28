import React from "react";
import { Typography, Paper, Container, Card, CardContent } from "@mui/material";

function Experience() {
  return (
    <Container id="experience" sx={{ py: 5 }}>
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Experience Details
        </Typography>

        {/* International Model United Nation */}
        <Card sx={{ display: "flex", mb: 5 }}>
          <img
            src="./imun.jpg"
            alt="International Model United Nation"
            style={{ width: "50%" }}
          />
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography variant="h5" component="div" fontWeight="bold" mb={2}>
              International Model United Nation
            </Typography>
            <Typography variant="body1">
              <strong>Position:</strong> Official Campus Ambassador
              <br />
              <strong>Duration:</strong> Dec 2021 - May 2022
              <br />
              <strong>Contribution:</strong> Developed proposals, assisted in
              marketing and business development, and assessed, managed, and
              coordinated the IMUN conferences.
            </Typography>
          </CardContent>
        </Card>

        {/* Student Organisation - Griffin (LPU) */}
        <Card sx={{ display: "flex", mb: 5 }}>
          <img
            src="./Griffin.png"
            alt="Student Organisation - Griffin (LPU)"
            style={{ width: "50%" }}
          />
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography variant="h5" component="div" fontWeight="bold" mb={2}>
              Student Organisation - Griffin (LPU)
            </Typography>
            <Typography variant="body1">
              <strong>Position:</strong> Co-CEO GRIFFIN and Lead of Content
              Writing Team
              <br />
              <strong>Duration:</strong> Jan 2022 - Present
              <br />
              <strong>Contribution:</strong> Developed content for various small
              and large-scale events, both online and offline. Managed the team
              and organization with professional responsibility and ensured the
              timely submission of projects.
            </Typography>
          </CardContent>
          <img
            src="./griffin.jpg"
            alt="Student Organisation - Griffin (LPU)"
            style={{ width: "50%" }}
          />
        </Card>

        {/* Omninos Web Technologies Pvt. Ltd. */}
        <Card sx={{ display: "flex" }}>
          <img
            src="./omninos.png"
            alt="Omninos Web Technologies Pvt. Ltd."
            style={{ width: "50%" }}
          />
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography variant="h5" component="div" fontWeight="bold" mb={2}>
              Omninos Web Technologies Pvt. Ltd.
            </Typography>
            <Typography variant="body1">
              <strong>Position:</strong> Web Design Intern
              <br />
              <strong>Duration:</strong> Jun 2022 - Present
              <br />
              <strong>Contribution:</strong> Worked on several real-time web
              projects. Learned Bootstrap 5 and used it to make responsive
              websites.
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </Container>
  );
}

export default Experience;
