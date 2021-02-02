import starFilledImg from 'assets/svg/star-filled.svg';
import './styles.scss';

function CourseItem({ course }) {
  return (
    <div className="course-item">
      <img
        alt="Instructor Headshot"
        src={course.instructor_image_url}
        className="course-item__instructor-image"
      />
      <div className="course-item__course-description">
        <div className="course-item__course-description-text">
          <div className="course-item__instructor-name">
            {course.instructor_name}
          </div>
          <div className="course-item__course-name">{course.title}</div>
        </div>
        <img
          className="course-item__course-description-favorite-img"
          alt="Favorite"
          src={starFilledImg}
        />
      </div>
    </div>
  );
}

export default CourseItem;
