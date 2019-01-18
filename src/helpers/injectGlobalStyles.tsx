import styled, { css, injectGlobal } from "styled-components"
import { Display, Sans, Serif } from "../elements/Typography"
import { color } from "./color"

/** Serves as the default reset for apps importing Palette */
export function injectGlobalStyles(additionalStyles?: string) {
  injectGlobal`
    @import url("https://webfonts.artsy.net/all-webfonts.css");

    *:focus {
      outline: none;
    }

    html {
      -webkit-box-sizing: border-box;
              box-sizing: border-box;
      -ms-overflow-style: scrollbar;
    }
    *,
    *::before,
    *::after {
      -webkit-box-sizing: inherit;
              box-sizing: inherit;
    }

    html,
    body,
    #root {
      -webkit-tap-highlight-color: transparent;
      height: 100%;
    }
    body {
      margin: 0;
      padding: 0;
    }

    html, body {
      font-family: 'AGaramondPro-Regular';
      font-size: 16px;
      line-height: 24px;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
    }

    ${additionalStyles};
  `

  // Mixins

  const noUnderline = css`
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  `

  const colorLink = css`
    color: ${color("purple100")};
  `

  const GlobalStyles = styled.div`
    /* Default links */

    a {
      cursor: pointer;
      color: inherit;
      transition: color 0.25s;

      &:hover {
        color: ${color("black100")};
      }

      &:active {
        color: ${color("black100")};
      }

      /* ts-styled-plugin erroniously parses this; see: */
      /* https://github.com/Microsoft/typescript-styled-plugin/issues/54 */

      &.noUnderline {
        ${noUnderline};
      }

      &.colorLink {
        ${noUnderline};
        ${colorLink};
      }
    }

    /* <Sans /> links */

    ${Sans} {
      a {
        color: inherit;

        &:hover {
          color: ${color("black100")};
        }

        &:active {
          color: ${color("black100")};
        }

        &.noUnderline {
          ${noUnderline};
        }

        &.colorLink {
          ${noUnderline};
          ${colorLink};
        }
      }
    }

    /* <Serif /> links */

    ${Serif} {
      a {
        color: inherit;

        &:hover {
          color: ${color("black100")};
        }

        &:active {
          color: ${color("black100")};
        }

        &.noUnderline {
          ${noUnderline};
        }

        &.colorLink {
          ${noUnderline};
          ${colorLink};
        }
      }
    }

    /* <Display /> links */

    ${Display} {
      a {
        color: ${color("black100")};
        text-decoration: none;
        text-transform: uppercase;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  `

  GlobalStyles.displayName = "GlobalStyles"

  return {
    GlobalStyles,
  }
}
