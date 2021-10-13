import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Switch, useLocation, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { MainContainer } from "assets/styles/routes";
import About from "pages/about";
import Projects from "pages/projects/";
import Skills from "pages/skills";

export default function Routes() {
  const location = useLocation();
  return (
    <HelmetProvider>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="scale" timeout={500}>
          <MainContainer>
            <Switch location={location}>
              <Route path="/" exact component={About} />
              <Route path="/projects" exact component={Projects} />
              <Route path="/skills" exact component={Skills} />
            </Switch>
          </MainContainer>
        </CSSTransition>
      </TransitionGroup>
    </HelmetProvider>
  );
}
