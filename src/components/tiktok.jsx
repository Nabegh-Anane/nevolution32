import React, { useState, useEffect } from 'react';
import { Button, Container, Typography, Card, CardContent, Snackbar } from '@mui/material';
import Navbar from './Navbar';

const PostToTikTok = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  // Fetch video data from JSON file
  useEffect(() => {
    fetch('/src/constants/videos.json') // Adjust path as necessary
      .then(response => response.json())
      .then(data => setVideos(data))
      .catch(error => console.error('Error fetching videos:', error));
  }, []);

  const handleSelectVideo = (id) => {
    // Deselect if the selected card is clicked again
    setSelectedVideoId(selectedVideoId === id ? null : id);
  };

  const handlePost = () => {
    if (!selectedVideoId) return;

    setLoading(true);
    setToastOpen(true);
    
    // Simulate posting process
    setTimeout(() => {
      setLoading(false);
      // Reset selection after posting
      setSelectedVideoId(null);
    }, 2000); // Simulate a 2-second delay
  };

  return (
    <>
      <Navbar />
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
          Post Video To Your TikTok 🎥
        </Typography>
        
        <Typography variant="body1" style={{ marginBottom: '2rem', fontSize: '1.2rem' }}>
          Select your video, add a catchy caption, and send it straight to TikTok! Quick and easy.
        </Typography>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {videos.map(video => (
            <Card 
              key={video.id} 
              style={{
                width: '250px', 
                height: '350px', 
                margin: '10px', 
                border: selectedVideoId === video.id ? '5px solid #ffffff' : '5px solid #ee4c7c',
                backgroundColor: selectedVideoId === video.id ? '#ee4c7c' : '#ffffff',
                cursor: 'pointer',
                transition: 'border-color 0.3s'
              }} 
              onClick={() => handleSelectVideo(video.id)}
            >
              <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <Typography variant="h6">{video.title}</Typography>
                <iframe 
                  title={video.title} 
                  width="100%" 
                  height="calc(100% - 50px)" // Adjust height to fit card with margins
                  style={{ margin: '5px 0' }} // Add top and bottom margin
                  src={video.embedUrl} 
                  frameBorder="0"
                  allowFullScreen 
                />
              </CardContent>
            </Card>
          ))}
        </div>

        <Button 
          variant="contained" 
          style={{
            backgroundColor: loading ? '#ee4c7c' : '#f00', 
            color: '#fff', 
            padding: '1rem 2rem', 
            fontSize: '1rem'
          }} 
          onClick={handlePost}
          disabled={loading}
        >
          {loading ? 'Posting...' : 'Post to TikTok'}
        </Button>

        <Snackbar
          open={toastOpen}
          onClose={() => setToastOpen(false)}
          message="Posting your video On Your Tiktok..."
          autoHideDuration={2000}
        />
      </Container>
    </>
  );
};

export default PostToTikTok;
