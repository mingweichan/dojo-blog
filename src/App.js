import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    
    <Router>
        <div className="App bg-yellow-200 min-h-screen text-zinc-950 text-base ">
          <div className="mx-96">
            <Navbar />
            <div className="content min-h-screen">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/create">
                  <Create />
                </Route>
                <Route path="/blogs/:id">
                  <BlogDetails />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </div>
          </div>
      </div>
    </Router>
  );
}

export default App;
