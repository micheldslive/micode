import {
  AboutContent,
  AboutRow,
  AboutCol,
  AboutTitle,
  AboutText,
  AboutSpan,
  AboutImage,
  TechSVG,
} from "assets/styles/about";
import { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <AboutContent>
        <AboutRow>
          <AboutCol lg={7} sm={12}>
            <AboutTitle>
              <AboutSpan>{"<"}</AboutSpan>Quem Sou<AboutSpan>{">"}</AboutSpan>
            </AboutTitle>
            <AboutText>
              Meu nome é Michel, 32 anos, moro em Recife-PE, Dev / Design
              Gráfico nas horas vagas. Atualmente cursando o Gama Experience da
              Gama Academy para Desenvolvimento Fullstack, e também estudando
              bastante autodidaticamente para aprender novas tecnologias.
            </AboutText>
            <AboutText>
              Iniciei no DevWorld com PHP em meados de 2016, e desde então sigo
              nessa estrada como Desenvolvedor. No início desse ano, comecei a
              programar com JavaScript, e surgiu a paixão por essa linguagem e
              seus Frameworks. Desde então venho dedicando todo meu tempo livre
              estudando ao máximo!.
            </AboutText>
          </AboutCol>
          <AboutCol lg={5} sm={12} align="right">
            <AboutImage src={TechSVG} />
          </AboutCol>
        </AboutRow>
      </AboutContent>
    );
  }
}
