import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const GlobalStyle = createGlobalStyle`

:root {
  --gray: #f5f5f5;
  --gray2: #ededed;
  --gray3: #ccc;
  --green: #30be00;
  --black: #141414;
  --black1: #191919;
  --black2: #a2a2a2;
}

body,
html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -ms-text-size-adjust:100%;
  -webkit-text-size-adjust:100%
}

body {
    background: var(--black);
    color: white;
    font-family: 'Varela Round',sans-serif;
    line-height: 1.2;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    user-select: none;
    cursor: default;

  @media (max-width: 1080px) {
    font-size: 93.75%
  }
  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}

body::-webkit-scrollbar {
  width: 8px;
}

body::-webkit-scrollbar-thumb {
  background-color: var(--purple);
  outline: 1px solid var(--purple);
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

* {
  padding: 0;
  margin: 0;
  border: 0;
  text-decoration: none;
}

a, a:hover {
  text-decoration: none;
  color: white;
}

section {
  width: 90%;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 90%;
  }
}

.scale-enter {
    z-index: 100;
    -webkit-animation: scaleOut .4s forwards;
	animation: scaleOut .4s forwards;
}

.scale-enter-active {
    z-index: 101;
	-webkit-animation: scaleDown .7s forwards;
	animation: scaleDown .7s forwards;
}

@-webkit-keyframes scaleOut {
	from { opacity: 1; -webkit-transform: scale(1); transform: scale(1); }
	to { opacity: 0; -webkit-transform: scale(0); transform: scale(0);}
}
@keyframes scaleOut {
	from { opacity: 1; -webkit-transform: scale(1); transform: scale(1); }
	to { opacity: 0; -webkit-transform: scale(0); transform: scale(0);}
}

@-webkit-keyframes scaleDown {
	from { opacity: 0; -webkit-transform: scale(1.2); transform: scale(1.2); }
	to { opacity: 1; -webkit-transform: scale(1); transform: scale(1);}
}
@keyframes scaleDown {
	from { opacity: 0; -webkit-transform: scale(1.2); transform: scale(1.2); }
	to { opacity: 1; -webkit-transform: scale(1); transform: scale(1);}
}
`;

export default GlobalStyle;
