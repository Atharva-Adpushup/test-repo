import './styles/App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar, Footer, ScrollButton } from './components';
import AuditScreen from './screens/AuditScreen';
import CompetitionAnalysis from './screens/CompetitionAnalysis/index';
import NotFound from './screens/404';
import ReactGA from 'react-ga';

function App() {
  ReactGA.initialize('UA-40677919-2');
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        {/* <Route path="/compAnalysis/:companyID" component={CompetitionAnalysis} /> */}
        <Route path='/:companyID' component={AuditScreen} />
        {/* <Route path="/*" component={NotFound} /> */}
      </Switch>
      <ScrollButton />
      <Footer />
    </Router>
  );
}

export default App;
