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
  z-index: ${({ index }) => index};
`;

export const AboutTextContent = styled.div``;

export const AboutTitle = styled.h1`
  padding-bottom: 20px;
`;

export const AboutSpan = styled.span`
  color: var(--green);
`;

export const AboutText = styled.p``;

export const AboutIconContainer = styled.div`
  min-height: 400px;
  position: relative;
  z-index: 0;

  @media (max-width: 991px) {
    margin-top: -300px;
  }
`;

export const AboutIcon = styled.img`
  width: ${({ width }) => width};
  margin: 0 auto;
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  background-color: var(--black1);
  border-radius: 10px;
  padding: 15px;
  animation: move-icon 3s ease ${({ delay }) => delay} infinite alternate;

  @media (max-width: 991px) {
    opacity: 0.6;
  }

  @keyframes move-icon {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(10px, -40px, 0);
    }
  }
`;
