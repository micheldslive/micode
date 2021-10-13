import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { ReactComponent as Micode } from "assets/images/micode.svg";

export const HeaderContent = styled.header`
  position: fixed;
  z-index: 103;
  width: 100%;
`;

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 68px;

  @media (max-width: 576px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MiLink = styled(Link)``;

export const MiLogo = styled(Micode)`
  width: 150px;
  margin-right: 5px;

  @media (max-width: 576px) {
    width: 100px;
  }
`;

export const Navigation = styled.nav``;

export const NavLink = styled(Link)`
  padding: 0 15px;

  &.active:after,
  &.active:before {
    position: absolute;
    color: var(--green);
    font-weight: bold;
  }

  &.active:after {
    content: ">";
    margin-left: 3px;
  }
  &.active:before {
    content: "<";
    margin-left: -11px;
  }
`;
