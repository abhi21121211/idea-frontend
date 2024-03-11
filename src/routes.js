// Implement React Router configuration
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import CourseList from './components/Courses/CourseList';
import CreateCourse from './components/Courses/CreateCourse';
import NotFound from './views/NotFound';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/courses" exact component={CourseList} />
        <Route path="/courses/create" component={CreateCourse} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;
