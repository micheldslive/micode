import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import TechSVG from "assets/images/technologies.svg";

export { TechSVG };

export const AboutContent = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--black);

  @media (max-width: 991px) {
    position: initial;
    padding: 3em 0;
    overflow: auto;
    height: 100%;
  }
`;

export const AboutRow = styled(Row)`
  margin: 0;
  display: flex;
  align-items: center;
`;

export const AboutCol = styled(Col)`
  padding: 0;
  text-align: ${({ align }) => align};
`;

export const AboutTitle = styled.h1`
  padding-bottom: 20px;
`;

export const AboutSpan = styled.span`
  color: var(--green);
`;

export const AboutText = styled.p``;

export const AboutImage = styled.img`
  width: 60%;
  margin: 0 auto;

  @media (max-width: 991px) {
    display: none;
  }
`;
