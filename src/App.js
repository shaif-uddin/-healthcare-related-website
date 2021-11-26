import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from './context/AuthProvider';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from './PrivateRoute/PrivateRoute';
import About from "./components/About/About";
import BookingService from "./components/BookingService/BookingService";
import Blog from "./components/Blog/Blog";
import Doctors from "./components/Doctors/Doctors";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Registration from "./components/Registration/Registration";
import Services from "./components/Services/Services";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        {/* Setup Routing for page navigation */}
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/blogs">
              <Blog></Blog>
            </Route>
            <PrivateRoute path="/bookingservice/:serviceID">
              <BookingService></BookingService>
            </PrivateRoute>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <PrivateRoute exact path="/services">
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path="/services/:serviceID">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route component={NotFound} />
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
