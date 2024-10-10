import React from 'react';
import { Container, Typography, CircularProgress } from '@mui/material';

const Confirmation = () => {
  return (
    <Container 
      style={{
        backgroundColor: '#000',
        color: '#fff',
        padding: '3rem',
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <Typography variant="h4" style={{ marginBottom: '2rem', fontWeight: 'bold', color: '#ee4c7c' }}>
        Posting in Progress...
      </Typography>
      <CircularProgress style={{ color: '#ee4c7c' }} />
      <Typography variant="body1" style={{ marginTop: '2rem' }}>
        Your video is being posted to TikTok. Please wait a moment.
      </Typography>
    </Container>
  );
};

export default Confirmation;
