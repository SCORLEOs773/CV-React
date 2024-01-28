import React from "react";
import {
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material";

function Contact() {
  return (
    <Container
      id="contact"
      sx={{ py: 5, backgroundColor: "#343a40", color: "white" }}
    >
      <Typography variant="h2" className="text-center mb-5">
        Contact Details
      </Typography>

      <Grid container spacing={4}>
        <Grid item md>
          <List className="list-group list-group-flush lead">
            <ListItem>
              <ListItemText
                primary={<span className="fw-bold">Mobile Number:</span>}
                secondary="(+91) 9896568692"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<span className="fw-bold">D.O.B:</span>}
                secondary="26th July, 2003"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<span className="fw-bold">Personal Email:</span>}
                secondary="mykeyman777@gmail.com"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<span className="fw-bold">Student Email:</span>}
                secondary="sukhad.12110106@lpu.in"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<span className="fw-bold">Address:</span>}
                secondary="Sector 20, Panchkula, Haryana, 134117"
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item md className="g-4">
          <div className="mapouter">
            <div className="gmap_canvas maps">
              <iframe
                title="Google Map"
                className="gmap_iframe"
                width="100%"
                height="234px"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13727.742457101753!2d76.84866328159153!3d30.663941506576876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f94916c2273d5%3A0xa7bfa67ab59efebd!2sSector%2020%2C%20Panchkula%2C%20Haryana%20134117!5e0!3m2!1sen!2sin!4v1657173139043!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
