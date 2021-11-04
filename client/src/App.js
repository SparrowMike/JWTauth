import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//* Routing
import PrivateRoute from "./components/routes/PrivateRoute";

//* Screens
import {
  PrivateScreen,
  RegisterScreen,
  LoginScreen,
  ForgotPasswordScreen,
  ResetPasswordScreen,
} from "./components/screens/";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <PrivateRoute exact path="/" component={PrivateScreen} />
          <Router exact path="/login" component={RegisterScreen} />
          <Router exact path="/register" component={LoginScreen} />
          <Router
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          />
          <Router
            exact
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
