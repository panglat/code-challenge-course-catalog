import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { requestCourses } from 'store/courses/actions';
import './styles.scss';

function Layout({ store }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestCourses());
  });
  return (
    <Provider store={store}>
      <div className="layout">Layout</div>
    </Provider>
  );
}

export default Layout;
