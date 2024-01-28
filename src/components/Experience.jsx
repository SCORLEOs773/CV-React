import React from "react";
import { Typography, Container, Card, CardContent } from "@mui/material";

const ExperienceCard = ({ image, title, position, duration, experience }) => {
  return (
    <Card
      sx={{
        mb: 5,
        borderRadius: 0,
        overflow: "hidden",
        width: "100%",
        height: "100%",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <CardContent sx={{ p: 3, height: "100%" }}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          {title}
        </Typography>
        <Typography variant="body1">
          <strong>Position:</strong> {position}
          <br />
          <strong>Duration:</strong> {duration}
          <br />
          <strong>Experience:</strong> {experience}
        </Typography>
      </CardContent>
    </Card>
  );
};

function Experience() {
  return (
    <Container id="experience" sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Work Experience
      </Typography>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        <ExperienceCard
          image="https://play-lh.googleusercontent.com/osoaojw0IpMUmYtI1btn1jiEKrn1LnbRUemyU45Vq2xxtRHGeqm0x05pauC7PkS4f60=w240-h480-rw"
          title="ThinkNEXT Technologies Pvt. Ltd."
          position="ReactJS Intern"
          duration="June 2023 - July 2023"
          experience="Mastered ReactJS during ThinkNext Technologies internship, refining critical thinking. Certified in Industrial Training and Internship, showcasing commitment. Established a strong foundation in ReactJS and web development for a promising career."
        />

        <ExperienceCard
          image="https://scontent.fixc1-7.fna.fbcdn.net/v/t39.30808-6/277590414_348860680631666_1607015186349856313_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=783fdb&_nc_ohc=f9RHa5BhV5YAX9ouYQe&_nc_ht=scontent.fixc1-7.fna&oh=00_AfDkjonQ08laxjhXlRNTra5F275B1KHm_uBPRbRLEmH8dQ&oe=65BB8F27"
          title="Omninos Web Technologies Pvt. Ltd."
          position="Web Design Intern"
          duration="Jun 2022 - July 2022"
          experience="Hands-on web development experience with HTML, CSS, and JavaScript. Demonstrated expertise in crafting responsive interfaces. Effective collaboration at Omninos Solutions, delivering quality solutions by working with cross-functional teams. Proven client-focused approach ensures successful project outcomes."
        />

        <ExperienceCard
          image="https://media.licdn.com/dms/image/C5616AQHH2inivFABtA/profile-displaybackgroundimage-shrink_350_1400/0/1623159991097?e=1712188800&v=beta&t=DiKKq4BwOi5_WJAly_TfcuOy4pnKvnLJ0Qm7BjWL7EY"
          title="Student Organisation - Griffin (LPU)"
          position="Co-CEO GRIFFIN and Lead of Content Writing Team"
          duration="Jan 2022 - April 2023"
          experience="Skilled in event organization, content creation, and team leadership. Demonstrated ability to write articles, reports, and event descriptions. Proficient in coordinating with cross-functional teams for flawless event execution."
        />
      </div>
    </Container>
  );
}

export default Experience;
