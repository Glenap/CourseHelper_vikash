import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';

const CourseDetails = () => {
  const router = useRouter();
  const { courseId } = router.query;

  return (
    <>
      <Navbar />
      <h1>Details for Course: {courseId}</h1>
    </>
  );
};

export default CourseDetails;
