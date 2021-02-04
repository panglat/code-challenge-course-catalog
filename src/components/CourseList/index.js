import CourseItem from 'components/CourseItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestCourses } from 'store/courses/actions';
import { setFavorite, unsetFavorite } from 'store/favorite/actions';
import { courseList } from 'store/courses/selectors';
import { TEST_EMAIL } from 'api/api01.js';
import './styles.scss';

function CourseList({ store }) {
  const dispatch = useDispatch();
  const courses = useSelector(courseList);
  useEffect(() => {
    dispatch(requestCourses());
  }, [dispatch]);

  const handleFavoriteClick = (course) => {
    if (course?.favorite) {
      dispatch(unsetFavorite({ courseId: course.id, email: TEST_EMAIL }));
    } else {
      dispatch(setFavorite({ courseId: course.id, email: TEST_EMAIL }));
    }
  };

  return (
    <div className="course-list">
      {courses &&
        courses.map((course) => (
          <CourseItem
            key={course.id}
            course={course}
            onFavoriteClick={handleFavoriteClick}
          />
        ))}
    </div>
  );
}

export default CourseList;
