import starFilledImg from 'assets/svg/star-filled.svg';
import starThinImg from 'assets/svg/star-thin.svg';
import './styles.scss';

function CourseItem({ course, onFavoriteClick }) {
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
        <button
          className="course-item__course-description-favorite-button"
          onClick={() => onFavoriteClick(course)}
        >
          <img
            className="course-item__course-description-favorite-button-img"
            alt="Favorite"
            src={course.favorite ? starFilledImg : starThinImg}
          />
        </button>
      </div>
    </div>
  );
}

export default CourseItem;
