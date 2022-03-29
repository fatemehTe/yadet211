import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainCoursePanel from './pages/course-panel';
import Lesson from './layout/lessonLayout/lessonLayout';
import EndLessonStep from './pages/lesson/endLessonStep';
import UsesRedux from './features/counter/pageUsesRedux';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/usesRedux" component={UsesRedux} />
        <Route exact path="/:step?" component={MainCoursePanel} />
        <Route exact path="/lesson/:step?" component={Lesson} />
        <Route exact path="/endLessonStep/:step?" component={EndLessonStep} />
      </Switch>
    </Router>
  )
}

export default App;