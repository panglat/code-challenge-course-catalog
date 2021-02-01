import CoursesPage from 'components/CoursesPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './styles.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/courses">
          <CoursesPage />
        </Route>
        <Route path="/">
          <Link to="/courses">Go to courses</Link>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
