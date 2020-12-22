// import Home from './Pages/Home/Home'
import './App.css';
import { Switch, Route } from 'react-router-dom'

import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Product from './Pages/Product/Product'
import Blog from './Pages/Blog/Blog'
import Contact from './Pages/Contact/Contact'
import Signup from './Pages/Signup/Signup'

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
				<Route path="/about" component={About} exact />
				<Route path="/product" component={Product} exact />
				<Route path="/blog" component={Blog} exact />
				<Route path="/contacts" component={Contact} exact />
				<Route path="/signup" component={Signup} exact />
      </Switch>
    </>
  );
}

export default App;
