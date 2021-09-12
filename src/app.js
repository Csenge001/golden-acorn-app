import Navbar from './navbar'
import Home from './home'
import States from './states'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
    return (
      <Router>
        <div className="app">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/simple/states">
                <States />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    )
}
  

export default App



