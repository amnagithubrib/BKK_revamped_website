// export default function ContactPage() {
//     return <h1>Contact Page</h1>;
//   }
  
// pages/contact.js

'use client';

import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Box,
  Typography
} from '@mui/material';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API or server)
    console.log(formData);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Contact Page
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1em',
        }}
      >
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Message"
          variant="outlined"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Container>
  );
}
