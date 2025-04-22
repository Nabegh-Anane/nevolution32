import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const TikTokAuth = () => {
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
        Authorization with TikTok
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '2rem' }}>
        Please authorize our application to access your TikTok account.
      </Typography>
      <a href="https://nevolution32-backend.vercel.app/api/auth" style={{ textDecoration: 'none' }}>
        <Button 
          variant="contained" 
          style={{
            backgroundColor: '#ee4c7c',
            color: '#fff',
            padding: '1rem 2rem',
            fontSize: '1rem',
            border: '2px solid #ee4c7c',
            transition: '0.3s',
            '&:hover': {
              backgroundColor: '#fff',
              color: '#ee4c7c',
            },
          }}
        >
          Authorize Now With Your TikTok
        </Button>
      </a>
    </Container>
  );
};

export default TikTokAuth;
