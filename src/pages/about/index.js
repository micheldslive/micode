import { Component } from "react";
import { Helmet } from "react-helmet-async";
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
import {
  Nubank,
  Gamalearning,
  CascaGrossa,
  Workpoint,
  Netflix,
} from "services/projects";

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
      Netflix,
    ];
    imageList.forEach((image) => {
      new Image().src = image;
    });
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Michel Domingos - Quem sou</title>
          <meta name="description" content="Michel Domingos About." />
        </Helmet>
        <AboutContent>
          <AboutRow>
            <AboutCol lg={6} sm={12} index="1">
              <AboutTextContent>
                <AboutTitle>
                  <AboutSpan>{"<"}</AboutSpan>Quem Sou
                  <AboutSpan>{">"}</AboutSpan>
                </AboutTitle>
                <AboutText>
                  Olá, Meu nome é Michel, 33 anos, de Recife-PE.
                </AboutText>
                <AboutText>
                  Iniciei no DevWorld com PHP em 2016, e desde esse ano sigo
                  nessa estrada como Desenvolvedor. No início de 2021, comecei a
                  trabalhar com Javascript, então surgiu a paixão por essa
                  linguagem e seus Frameworks. Meu foco é Desenvolvimento
                  Front-end, mas também possuo uma ótima experiência com
                  Desenvolvimento Back-end.
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
      </>
    );
  }
}
