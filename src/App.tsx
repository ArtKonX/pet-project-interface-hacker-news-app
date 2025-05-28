import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import SingleNewsPage from './pages/SingleNewsPage';

function App() {

  return (
    <Router basename='/pet-project-interface-hacker-news-app'>
      <Switch>
        <Route exact path="/" component={NewsPage} />
        <Route path="/news/:id" component={SingleNewsPage} />
      </Switch>
    </Router>
  )
}

export default App
