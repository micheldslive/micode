import { Component } from "react";
import {
  AboutContent,
  AboutRow,
  AboutCol,
  AboutTitle,
  AboutText,
  AboutSpan,
  AboutIcon,
  AboutIconContainer,
  AboutTextContent,
} from "assets/styles/about";
import { Html, Css, Js, Sass, React, PHP, Node } from "services/skills";
import { Nubank, Gamalearning, CascaGrossa, Workpoint } from "services/projects";

export default class About extends Component {
  componentDidMount() {
    const imageList = [
      Html,
      Css,
      Js,
      Sass,
      React,
      PHP,
      Node,
      Nubank,
      Gamalearning,
      CascaGrossa,
      Workpoint,
    ];
    imageList.forEach((image) => {
      new Image().src = image;
    });
  }

  render() {
    return (
      <AboutContent>
        <AboutRow>
          <AboutCol lg={6} sm={12} index="1">
            <AboutTextContent>
              <AboutTitle>
                <AboutSpan>{"<"}</AboutSpan>Quem Sou<AboutSpan>{">"}</AboutSpan>
              </AboutTitle>
              <AboutText>
                Meu nome é Michel, 32 anos, moro em Recife-PE, Dev / Design
                Gráfico nas horas vagas. Atualmente cursando o Gama Experience
                da Gama Academy para Desenvolvimento Fullstack, e também
                estudando bastante autodidaticamente para aprender novas
                tecnologias.
              </AboutText>
              <AboutText>
                Iniciei no DevWorld com PHP em meados de 2016, e desde então
                sigo nessa estrada como Desenvolvedor. No início desse ano,
                comecei a programar com JavaScript, e surgiu a paixão por essa
                linguagem e seus Frameworks. Desde então venho dedicando todo
                meu tempo livre estudando ao máximo!.
              </AboutText>
            </AboutTextContent>
          </AboutCol>
          <AboutCol lg={6} sm={12} align="right">
            <AboutIconContainer>
              <AboutIcon src={Html} width="50px" top="50px" right="150px" delay="6s"/>
              <AboutIcon src={Css} width="50px" top="200px" right="50px" delay="5s"/>
              <AboutIcon src={Js} width="50px" top="300px" right="350px" delay="4s"/>
              <AboutIcon src={Sass} width="50px" top="300px" right="150px" delay="3s"/>
              <AboutIcon src={PHP} width="50px" top="50px" right="350px" delay="2s"/>
              <AboutIcon src={Node} width="50px" top="200px" right="450px" delay="1s"/>
              <AboutIcon src={React} width="80px" top="200px" right="250px" delay="0s"/>
            </AboutIconContainer>
          </AboutCol>
        </AboutRow>
      </AboutContent>
    );
  }
}
