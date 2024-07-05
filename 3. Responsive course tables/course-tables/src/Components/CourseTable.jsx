import React from 'react';
import { courses } from '../assets/data';
import './CourseTable.css';

const CourseTable = () => {
  return (
    <div className="course-table">
        <div className="course-header">
      <h2>My Courses</h2>
      <p>View All</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Start Date</th>
            <th>Lesson Completed</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id} className="course-row">
              <td className="course-details">
                <div className="course-name">
                  <img className="course-icon" src={course.icon} alt={`${course.title} icon`} />
                  <div className="course-info">
                    <div className="course-title">{course.title}</div>
                    <div className="course-lessons">{course.lessons} Lessons</div>
                  </div>
                </div>
              </td>
              <td className="course-start-date">{course.startDate}</td>
              <td className="course-completed">{course.completed}</td>
              <td className="course-duration">{course.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;
