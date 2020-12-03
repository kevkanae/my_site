import React from "react";
import Nav from "../Components/Nav.js";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./About/About.js";
import Project from "./Projects/Project.js";
import Skills from "./Skills/Skill.js";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Route exact path="/" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Project} />
      </div>
    </BrowserRouter>
  );
}
