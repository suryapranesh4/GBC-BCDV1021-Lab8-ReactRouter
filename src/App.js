import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import About from "./Components/About";

import Navigation from "./Navigation";

import NavigationExercise3 from "./Navigation/exercise3";
import Student from "./Student";

import NavigationExercise4 from "./Navigation/exercise4";
import history from "./Navigation/history";
import Redirect from "./Components/Redirect";
import MainPage from "./Components/MainPage";

function App() {
  const HomeComponent = () => {
    return <div className="routeData">Home</div>;
  };
  const NewRoute = () => {
    return <div className="routeData">NewRoute</div>;
  };
  return (
    <div className="main">
      <div className="exercise exercise1">
        <div className="exerciseHeader">Exercise 1</div>
        <BrowserRouter>
          <div className="routerData">
            <div className="routes">
              <Link to="/">Home</Link>
              <Link to="/newroute">New Route</Link>
            </div>
            <Routes>
              <Route path="/" element={<HomeComponent />} exact />
              <Route path="/newroute" element={<NewRoute />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>

      <div className="exercise exercise2">
        <div className="exerciseHeader">Exercise 2</div>
        <BrowserRouter>
          <div className="routerData">
            <Navigation />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>

      <div className="exercise exercise3">
        <div className="exerciseHeader">Exercise 3</div>
        <BrowserRouter>
          <div className="routerData">
            <NavigationExercise3 />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/student/:studentname/" element={<Student />}>
                <Route path=":studentno" element={<Student />} />
              </Route>
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>

      <div className="exercise exercise4">
        <div className="exerciseHeader">Exercise 4</div>
        <BrowserRouter history={history}>
          <NavigationExercise4 />
          <Routes>
            <Route path="/" element={<MainPage />} exact />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/student/:studentname/" element={<Student />}>
              <Route path=":studentno" element={<Student />} />
            </Route>
            <Route path="/redirect" element={<Redirect history={history} />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
