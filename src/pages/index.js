import React from 'react';
import { Grid, Container } from '@mui/material';
import Navbar from '../components/Navbar';
import CourseCard from '../components/CourseCard';

const courses = [
  {
    title: 'Machine Learning',
    code: 'CS771',
    credits: 9,
    description: 'An advanced course on machine learning algorithms.',
    image: '/images/ml.jpg',
  },
  {
    title: 'Data Structures',
    code: 'ESO207',
    credits: 11,
    description: 'Learn about arrays, linked lists, trees, and more.',
    image: '/images/dsa.jpg',
  },
  {
    title: 'Differential Equation',
    code: 'MTH114M',
    credits: 6,
    description: 'Learn about Differential Equation in depth and more.',
    image: '/images/ode.jpeg',
  },
  {
    title: 'Introduction to Electronics',
    code: 'ESO201',
    credits: 11,
    description: 'Basics of electrical circuits and applications.',
    image: '/images/electronics.jpg',
  },
];

const HomePage = () => (
  <>
    <Navbar />
    <Container style={{ marginTop: '2rem' }}>
      <Grid container spacing={3}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={course.code}>
            <CourseCard {...course} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </>
);

export default HomePage;
