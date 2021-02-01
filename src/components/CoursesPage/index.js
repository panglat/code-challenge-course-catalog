import CourseList from 'components/CourseList';
import './styles.scss';

function CoursesPage() {
  return (
    <div className="courses-page">
      <div className="courses-page__course-list">
        <CourseList />
      </div>
    </div>
  );
}

export default CoursesPage;
