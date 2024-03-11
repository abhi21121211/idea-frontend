import React from 'react';

const courses = [
  { id: 1, title: 'Course 1', description: 'Description for Course 1' },
  { id: 2, title: 'Course 2', description: 'Description for Course 2' },
  { id: 3, title: 'Course 3', description: 'Description for Course 3' }
];

function CourseList() {
  return (
    <div>
      <h2>Course List</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
