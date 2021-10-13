import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

export const ProjectsContent = styled.section`
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

export const ProjectsRow = styled(Row)`
  margin: 0;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ProjectsCol = styled(Col)`
  padding: 0;
  margin-bottom: 20px;
  margin: 0 auto;
  max-width: ${({ width }) => width};
`;

export const ProjectsTitle = styled.h1`
  padding-bottom: 20px;
`;

export const ProjectsSpan = styled.span`
  color: var(--green);
`;

export const ProjectsText = styled.p``;

export const ProjectsCardContent = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border-radius: 5px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const ProjectsCard = styled.div`
  margin: 10px;
  background-color: #17161d;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s linear;
  border: 1px solid var(--black1);
`;

export const ProjectsCardLink = styled.a`
  cursor: pointer;
  &:hover ${ProjectsCard}, & ${ProjectsCard}.selected {
    border: 1px solid var(--green);
  }
`;

export const ProjectsCardImg = styled.img`
  width: 80%;
  margin: 0 auto;
  padding: 10px 0;
`;

export const ProjectLink = styled.a`
  transition: all 0.2s linear;
  &:hover {
    color: var(--green);
  }
`;
