import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Introduction from './components/Introduction';
import Definition from './components/Definition';
import VoteSection from './components/VoteSection';
import CommentsSection from './components/CommentsSection';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Introduction} />
        <Route path="/definition" component={Definition} />
        <Route path="/vote" component={VoteSection} />
        <Route path="/comments" component={CommentsSection} />
      </Switch>
    </Router>
  );
}

export default App;
