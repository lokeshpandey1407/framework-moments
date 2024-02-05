import React, { useState } from "react";
import { TextField, Button, Box, Container, Grid } from "@mui/material";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
        <Grid container spacing={2}>

          <Grid item xs={12} md={6}>
            <Box>
              <div>
                Give us a call
                <p></p>
                (+91) 98188 25848
                <p></p>
                (+91) 99108 96623
                <p></p>
                (+91) 88262 64586
                <p></p>
                HOURS OF OPERATION : 11AM - 8PM Call us for any kind of support. We
                will provide you effective resolution for any query you have.
              </div>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box width="100%" margin="10px">
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                style={{ margin: '10px 0' }}
              />
              <TextField
                label="Last Name"
                variant="outlined"
                name="lastName"
                fullWidth
                value={formData.lastName}
                onChange={handleChange}
                style={{ margin: '10px 0' }}
              />
              <TextField
                label="Email"
                variant="outlined"
                name="email"
                fullWidth
                value={formData.email}
                onChange={handleChange}
                style={{ margin: '10px 0' }}
              />
              <TextField
                label="Contact"
                variant="outlined"
                name="contact"
                fullWidth
                value={formData.contact}
                onChange={handleChange}
                style={{ margin: '10px 0' }}
              />
              <TextField
                label="Subject"
                variant="outlined"
                name="subject"
                fullWidth
                value={formData.subject}
                onChange={handleChange}
                style={{ margin: '10px 0' }}
              />
              <TextField
                label="Message"
                variant="outlined"
                name="message"
                fullWidth
                value={formData.message}
                onChange={handleChange}
                style={{ margin: '10px 0' }}
              />
              <Button variant="contained" sx={{ margin: "10px 0" }}>
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Contact;
