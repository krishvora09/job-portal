import React, { useState } from "react";
import axios from "axios";
import {
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  Chip,
  Autocomplete
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const initial = {
  postId: "",
  postProfile: "",
  reqExperience: 0,
  postTechStack: [],
  postDesc: ""
};

const skillOptions = [
  "Java",
  "Spring Boot",
  "React",
  "Node.js",
  "Python",
  "Django",
  "JavaScript",
  "SQL",
  "MongoDB",
  "Docker"
];

const Create = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(initial);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/jobPost", form)
      .then(() => navigate("/"))
      .catch((error) => console.log(error));
  };

  return (
    <div style={{ background: "#0f172a", minHeight: "100vh", padding: "40px" }}>

      <Paper
        sx={{
          maxWidth: "650px",
          margin: "auto",
          padding: "30px",
          borderRadius: "16px",
          background: "#f8fafc", // ✅ LIGHT FORM
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
        }}
      >

        {/* Title */}
        <Typography
          align="center"
          sx={{
            fontFamily: '"Pacifico", cursive',
            fontSize: "24px",
            color: "#1e3a8a",
            mb: 3
          }}
        >
          Create Job Post
        </Typography>

        <form onSubmit={handleSubmit}>

          {/* Post ID */}
          <TextField
            fullWidth
            label="Post ID"
            type="number"
            value={form.postId}
            onChange={(e) =>
              setForm({ ...form, postId: e.target.value })
            }
            sx={{ mb: 2 }}
          />

          {/* Profile */}
          <TextField
            fullWidth
            label="Job Profile"
            value={form.postProfile}
            onChange={(e) =>
              setForm({ ...form, postProfile: e.target.value })
            }
            sx={{ mb: 2 }}
          />

          {/* Experience */}
          <TextField
            fullWidth
            type="number"
            label="Experience (Years)"
            value={form.reqExperience}
            onChange={(e) =>
              setForm({ ...form, reqExperience: e.target.value })
            }
            sx={{ mb: 2 }}
          />

          {/* Description */}
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Job Description"
            value={form.postDesc}
            onChange={(e) =>
              setForm({ ...form, postDesc: e.target.value })
            }
            sx={{
              mb: 3,
              "& .MuiInputBase-root": {
                fontFamily: '"Manrope", sans-serif' // ✅ FONT FIX
              }
            }}
          />

          {/* Skills (Autocomplete with suggestions) */}
          <Typography
            sx={{
              mb: 1,
              fontFamily: '"Manrope", sans-serif',
              fontWeight: 600
            }}
          >
            Skills
          </Typography>

          <Autocomplete
            multiple
            freeSolo // ✅ allow custom input
            options={skillOptions}
            value={form.postTechStack}
            onChange={(event, newValue) =>
              setForm({ ...form, postTechStack: newValue })
            }
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  {...getTagProps({ index })}
                  key={index}
                  label={option}
                  sx={{
                    background: "#6366f1",
                    color: "#fff"
                  }}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Select or type skills"
                sx={{
                  "& .MuiInputBase-root": {
                    fontFamily: '"Manrope", sans-serif'
                  }
                }}
              />
            )}
            sx={{ mb: 3 }}
          />

          {/* Submit */}
          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{
              background: "#22c55e",
              fontWeight: 600,
              fontFamily: '"Manrope", sans-serif',
              "&:hover": {
                background: "#16a34a"
              }
            }}
          >
            Submit
          </Button>

        </form>

      </Paper>
    </div>
  );
};

export default Create;