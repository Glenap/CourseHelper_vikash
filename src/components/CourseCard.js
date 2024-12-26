import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Modal,
  Box,
  TextField,
} from '@mui/material';

const CourseCard = ({ title, code, credits, description, image }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card style={{ maxWidth: 345, margin: '1rem' }} onClick={handleOpen}>
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Code: {code} | Credits: {credits}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>

      {/* Modal for Course Details */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Course Details
          </Typography>
          <TextField
            label="Course Name"
            defaultValue={title}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Course Code"
            defaultValue={code}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Credits"
            defaultValue={credits}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            defaultValue={description}
            multiline
            rows={3}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginRight: '1rem' }}
          >
            Update
          </Button>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default CourseCard;
