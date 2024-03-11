import React, { useState } from 'react';

function CreateCourse() {
  const [courseData, setCourseData] = useState({ title: '', description: '' });

  const handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch action to create course
    console.log('Creating course:', courseData);
    // Reset form after submission
    setCourseData({ title: '', description: '' });
  };

  return (
    <div>
      <h2>Create Course</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={courseData.title} onChange={handleChange} />
        <textarea name="description" placeholder="Description" value={courseData.description} onChange={handleChange}></textarea>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateCourse;
