import React from "react"
import styled, { css } from "styled-components"

import { BorderBox } from "./BorderBox"
import { Sans } from "./Typography"

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  outline: solid 1px red;

  &:hover {
    .tooltip-content {
      opacity: 1;

      &:hover {
        cursor: default;
        opacity: 0;
      }
    }
  }
`

const placements = {
  top: css`
    bottom: 100%;
    left: 50%;
    transform: translate(-50%, -5px);
  `,
  right: css`
    top: 50%;
    left: 100%;
    transform: translate(5px, -50%);
  `,
  bottom: css`
    top: 100%;
    left: 50%;
    transform: translate(-50%, 5px);
  `,
  left: css`
    top: 50%;
    right: 100%;
    transform: translate(-5px, -50%);
  `,
}

const Tip = styled(BorderBox)`
  ${placements.left};
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 5px;
  max-width: 230px;
  opacity: 1;
  position: absolute;
  text-align: left;
  transition: opacity 250ms ease-out;
  width: 20em;
  z-index: 10000;
`

export interface TooltipProps {
  content: string
  small: boolean
}

/**
 * A tooltip
 */
export class Tooltip extends React.Component<TooltipProps> {
  render() {
    const content = formattedTip(this.props.content)
    return (
      <Wrapper>
        <Tip className="tooltip-content" p={this.props.small ? 0.5 : 2}>
          <Sans size={"2"}>{content}</Sans>
        </Tip>
        {this.props.children}
      </Wrapper>
    )
  }
}

const formattedTip = tip => {
  let substring = tip.substring(0, 300)

  if (substring !== tip) {
    substring += "..."
  }

  return substring
}
