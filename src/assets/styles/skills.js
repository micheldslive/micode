import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

export const SkillsContent = styled.section`
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

export const SkillsRow = styled(Row)`
  margin: 0;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SkillsCol = styled(Col)`
  padding: 0;
`;

export const SkillsTitle = styled.h1`
  padding-bottom: 20px;
`;

export const SkillsSpan = styled.span`
  color: var(--green);
`;

export const SkillsText = styled.p``;

export const SkillsCardContent = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border-radius: 5px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const SkillsCard = styled.div`
  margin: 15px;
  background-color: var(--black1);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s linear;
  border: 1px solid var(--black1);
`;

export const SkillsInfos = styled.div`
  text-align: center;
`;

export const SkillsName = styled.div`
  opacity: 0;
  padding: 10px 0;
  transition: all 0.2s linear;
`;

export const SkillsCardLink = styled.a`
  cursor: pointer;

  &:hover ${SkillsCard}, & ${SkillsCard}.selected {
    border: 1px solid var(--green);
  }

  &:hover ${SkillsName}, & ${SkillsCard}.selected ${SkillsName} {
    opacity: 1;
  }
`;

export const SkillsCardImg = styled.img`
  width: 60px;
  padding: 10px 0;

  @media (max-width: 576px) {
    width: 40px;
  }
`;
