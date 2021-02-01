import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { requestCourses } from 'store/courses/actions';

import './styles.scss';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestCourses());
  });

  return <div className="App">App</div>;
}

export default App;
