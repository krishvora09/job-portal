import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Card,
  Grid,
  Typography,
  Box
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [post, setPost] = useState([]);
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate("/edit", { state: { id } });
  };

  useEffect(() => {
    const fetchInitialPosts = async () => {
      const response = await axios.get("http://localhost:8080/jobPosts");
      setPost(response.data);
    };
    fetchInitialPosts();
  }, []);

  const handleDelete = (id) => {
    async function deletePost() {
      await axios.delete(`http://localhost:8080/jobPost/${id}`);
    }
    deletePost();
    window.location.reload();
  };

  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        paddingTop: "40px",   // ✅ top spacing FIX
        paddingBottom: "40px" // ✅ bottom spacing FIX
      }}
    >
      <Grid 
        container 
        rowSpacing={5}        // ✅ vertical gap FIX
        columnSpacing={4}     // ✅ horizontal gap
        sx={{ px: 3 }}
      >
        
        {post.map((p) => (
          <Grid key={p.id} item xs={12} sm={6} md={6} lg={4}>
            
            <Card
              sx={{
                padding: "20px",
                borderRadius: "16px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
                background: "linear-gradient(135deg, #1e293b, #334155)",
                color: "#fff",
                transition: "0.3s",
                mb: 1, // ✅ extra row gap safety
                "&:hover": {
                  transform: "translateY(-5px)",
                }
              }}
            >

              {/* Title */}
              <Typography
                sx={{
                  fontFamily: '"Pacifico", cursive',
                  fontSize: "18px",
                  color: "#38bdf8",
                }}
              >
                {p.postProfile}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  fontFamily: '"Manrope", sans-serif', // ✅ NEW PREMIUM FONT
                  fontSize: "14px",
                  color: "#d1d5db",
                  mt: 1,
                  lineHeight: 1.7,
                  letterSpacing: "0.3px"
                }}
              >
                {p.postDesc}
              </Typography>

              {/* Experience */}
              <Typography
                sx={{
                  fontFamily: '"Manrope", sans-serif',
                  mt: 2,
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#facc15",
                }}
              >
                Experience: {p.reqExperience} years
              </Typography>

              {/* Skills */}
              <Typography
                sx={{
                  fontFamily: '"Manrope", sans-serif',
                  mt: 2,
                  fontWeight: 600,
                  fontSize: "14px",
                }}
              >
                Skills:
              </Typography>

              <Box sx={{ mt: 1 }}>
                {p.postTechStack.map((s, i) => (
                  <Typography
                    key={i}
                    sx={{
                      display: "inline-block",
                      background: "#6366f1",
                      borderRadius: "14px",
                      px: 1.5,
                      py: 0.4,
                      mr: 0.5,
                      mt: 0.5,
                      fontSize: "12px",
                      fontFamily: '"Manrope", sans-serif',
                    }}
                  >
                    {s}
                  </Typography>
                ))}
              </Box>

              {/* Actions */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 3,
                }}
              >
                <DeleteIcon
                  sx={{ cursor: "pointer", color: "#ef4444" }}
                  onClick={() => handleDelete(p.postId)}
                />

                <EditIcon
                  sx={{ cursor: "pointer", color: "#22c55e" }}
                  onClick={() => handleEdit(p.postId)}
                />
              </Box>

            </Card>

          </Grid>
        ))}

      </Grid>
    </div>
  );
};

export default Search;