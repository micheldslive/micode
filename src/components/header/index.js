import { Component } from "react";
import {
  Container,
  HeaderContent,
  Navigation,
  MiLink,
  MiLogo,
  NavLink,
} from "assets/styles/header";

export default class Header extends Component {
  render() {
    return (
      <HeaderContent>
        <Container>
          <MiLink to="/"><MiLogo /></MiLink>
          <Navigation>
            <NavLink exact to="/">Quem sou</NavLink>
            <NavLink exact to="/projects">Projetos</NavLink>
            <NavLink exact to="/skills"> Skills</NavLink>
          </Navigation>
        </Container>
      </HeaderContent>
    );
  }
}
