import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import { Email, Phone, GitHub, LinkedIn, Twitter } from "@mui/icons-material";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    alert("Message sent successfully!");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f5f5f5",
        p: 3,
      }}
    >
      <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold" }}>
        Contact Me
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              bgcolor: "white",
              p: 4,
              borderRadius: 2,
              boxShadow: 2,
            }}
            onSubmit={handleSubmit}
          >
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              fullWidth
              required
            />
            <TextField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
              required
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                bgcolor: "#1a73e8",
                color: "white",
                "&:hover": { bgcolor: "#1769aa" },
              }}
            >
              Send Message
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              bgcolor: "white",
              p: 4,
              borderRadius: 2,
              boxShadow: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Contact Info
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Email color="primary" />
              <Typography>Email: brahmah7011@gmail.com</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Phone color="primary" />
              <Typography>Phone: +91 9337754996</Typography>
            </Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
              Follow Me
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                href="https://github.com/Brahmagithubrit"
                target="_blank"
              >
                <GitHub fontSize="large" />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/brahmananda-tosh-770995266/"
                target="_blank"
              >
                <LinkedIn fontSize="large" />
              </IconButton>
              <IconButton
                href="https://x.com/Brahmanand3151"
                target="_blank"
              >
                <Twitter fontSize="large" />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
