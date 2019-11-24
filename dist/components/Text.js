import styled, { css } from "styled-components";
export const Text = styled.span`
  ${props => props.large && css`
      font-size: 1.2rem;
    `}
  ${props => props.bold && css`
      font-weight: bold;
    `}
  ${props => props.block && css`
      display: block;
    `}
  ${props => props.secondary && css`
      color: #777;
    `}
  ${props => props.small && css`
      font-size: 0.9rem;
    `}
  ${props => props.block && css`
      margin-bottom: 10px;
    `}
    
`;