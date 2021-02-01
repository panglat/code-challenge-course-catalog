import CourseItem from 'components/CourseItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestCourses } from 'store/courses/actions';
import { courseList } from 'store/courses/selectors';
import './styles.scss';

function CourseList({ store }) {
  const dispatch = useDispatch();
  const courses = useSelector(courseList);
  useEffect(() => {
    dispatch(requestCourses());
  }, [dispatch]);
  return (
    <div className="course-list">
      {courses &&
        courses.map((course) => (
          <CourseItem key={courses.id} course={course} />
        ))}
    </div>
  );
}

export default CourseList;
