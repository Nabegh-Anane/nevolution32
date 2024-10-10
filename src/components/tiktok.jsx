import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import './App.css';
import Navbar from './Navbar';

const PostToTikTok = () => {
  return (
    <>
      <Navbar />  {/* Wrap Navbar inside the fragment */}
      <Container 
        style={{
          backgroundColor: '#000', 
          color: '#fff', 
          margin: '150px auto',
          padding: '2rem', 
          borderRadius: '10px', 
          textAlign: 'center',
          minHeight: '100vh'
        }}>
        <Typography variant="h2" style={{ marginBottom: '2rem' }}>
          Post Your Video to TikTok 🎥
        </Typography>
        
        <Typography variant="body1" style={{ marginBottom: '2rem', fontSize: '1.2rem' }}>
          Select your video, add a catchy caption, and send it straight to TikTok! Quick and easy.
        </Typography>
        
        <Button variant="contained" style={{
          backgroundColor: '#f00', 
          color: '#fff', 
          padding: '1rem 2rem', 
          fontSize: '1rem'
        }}>
          Post to TikTok
        </Button>
      </Container>
    </>
  );
};

export default PostToTikTok;
