import styled, { css } from "styled-components";

export const Text = styled.span`
  ${(props: any) =>
    props.large &&
    css`
      font-size: 1.2rem;
    `}
  ${(props: any) =>
    props.bold &&
    css`
      font-weight: bold;
    `}
  ${(props: any) =>
    props.block &&
    css`
      display: block;
    `}
  ${(props: any) =>
    props.secondary &&
    css`
      color: #777;
    `}
  ${(props: any) =>
    props.small &&
    css`
      font-size: 0.9rem;
    `}
  ${(props: any) =>
    props.block &&
    css`
      margin-bottom: 10px;
    `}
    
`;
