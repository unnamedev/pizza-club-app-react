import {createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *:where(:not(iframe, canvas, img, svg, video):not(svg *, symbol *)) {
    all: unset;
    display: revert;
  }
  ol,
  ul {
    list-style: none;
  }
  p {
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    -ms-hyphenate-limit-chars: 6 3 3;
    -ms-hyphenate-limit-lines: 2;
    -ms-hyphenate-limit-zone: 8%;
    hyphens: auto;
    hyphenate-limit-chars: 6 3 3;
    hyphenate-limit-lines: 2;
    hyphenate-limit-last: always;
    hyphenate-limit-zone: 8%;
  }
  img {
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    border: none;
  }
  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  table {
    border-collapse: collapse;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    cursor: pointer;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
    margin: 0;
  }
  textarea {
    white-space: revert;
  }
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  html,
  .page {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }
  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }
  .visually-hidden:not(:focus):not(:active) {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
  // 💡 Variables
  :root {
    --base-font-size: 16px;
    --base-line-height: 24px;
    --base-font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  }
  
  #root {
    height: 100%;
    min-height: 100vh;
    width: 100%;
  }
  
  // 💡 Globals
  body {
    margin: 0;
    height: 100%;
    min-height: 100%;
    position: relative;
    overflow-x: hidden;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: var(--base-font-size);
    line-height: var(--base-line-height);
    font-family: var(--base-font-family);
    font-weight: 400;
  }
`