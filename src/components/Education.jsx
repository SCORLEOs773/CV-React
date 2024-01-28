import React from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";

const Education = () => {
  const openCertificate = (certificateLink) => {
    window.open(certificateLink, "_blank");
  };

  return (
    <Container id="education" sx={{ py: 5 }}>
      <Typography variant="h2" align="center" fontWeight="bold" sx={{ mb: 5 }}>
        Educational Details
      </Typography>

      <Grid container spacing={4}>
        {/* Class 10th */}
        <Grid item xs={12} md={4}>
          <Card
            elevation={3}
            sx={{
              border: 3,
              borderColor: "primary.main",
              borderRadius: 4,
              backgroundColor: "#c2ddf6",
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <Typography
                variant="h4"
                sx={{ mb: 2, fontFamily: "Quicksand, sans-serif" }}
              >
                Class 10th
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Course: Matric (CBSE Board)" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="School: Army Public School, BB Cantt. Srinagar" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Percentage/GPA: 95.2%" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Year of Passing: 2019" />
                </ListItem>
              </List>
              <Button
                variant="contained"
                onClick={() =>
                  openCertificate(
                    "https://github.com/SCORLEOs773/CV/blob/main/Class_10.jpg?raw=true"
                  )
                }
              >
                View Certificate
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Class 12th */}
        <Grid item xs={12} md={4}>
          <Card
            elevation={3}
            sx={{
              border: 3,
              borderColor: "secondary.main",
              borderRadius: 4,
              backgroundColor: "#d6e2f0",
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <Typography
                variant="h4"
                sx={{ mb: 2, fontFamily: "Quicksand, sans-serif" }}
              >
                Class 12th
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Course: Non-Medical (CBSE Board)" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="School: Army Public School, Ambala Cantt., Haryana" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Percentage/GPA: 95.4%" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Year of Passing: 2021" />
                </ListItem>
              </List>
              <Button
                variant="contained"
                onClick={() =>
                  openCertificate(
                    "https://github.com/SCORLEOs773/CV/blob/main/Class_12.jpg?raw=true"
                  )
                }
              >
                View Certificate
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Engineering */}
        <Grid item xs={12} md={4}>
          <Card
            elevation={3}
            sx={{
              border: 3,
              borderColor: "success.main",
              borderRadius: 4,
              backgroundColor: "#c0ebd7",
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <Typography
                variant="h4"
                sx={{ mb: 2, fontFamily: "Quicksand, sans-serif" }}
              >
                Engineering
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Course: B. Tech. CSE (Hons.)" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="College: Lovely Professional University, Jalandhar" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Percentage/GPA: 8.89" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Year of Passing: 2025" />
                </ListItem>
              </List>
              <Button
                variant="contained"
                onClick={() =>
                  openCertificate(
                    "https://drive.google.com/file/d/1ntJhTus3Wqg-AC9xJGRP4jHSNGzQuj3Z/view?usp=sharing"
                  )
                }
              >
                View Certificate
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Education;
