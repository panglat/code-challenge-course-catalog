import './styles.scss';

function CourseItem({ course }) {
  return (
    <div className="course-item">
      <img
        alt="Instructor Headshot"
        src={course.instructor_image_url}
        className="course-item__image"
      />
      <div className="course-item__description">
        <div className="course-item__instructor-name">
          {course.instructor_name}
        </div>
        <div className="course-item__course-name">{course.title}</div>
      </div>
    </div>
  );
}

export default CourseItem;
