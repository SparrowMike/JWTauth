import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Router exact path="/login" component={ResiterScreen} />
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
