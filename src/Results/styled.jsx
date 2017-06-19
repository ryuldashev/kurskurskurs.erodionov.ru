import React from 'react';
import styled from 'styled-components';

export const Results = styled.div`
  margin-bottom: 2rem;
`;

export const Nickname = styled.span`
  color: #000;
  border-bottom: 1px solid #F8B1C6;
  box-shadow: inset 0 -5px 0px 0px #F8B1C6;
  font-family: monospace;
  text-decoration: none;
  transition: .2s;
`;

const ResultStyled = styled.a`
  padding: 10px 20px 12px 20px;
  margin-bottom: 1rem;
  margin-right: 1rem;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 15px 20px -10px rgba(0,0,0,0.3);
  transition: .2s;
  display: inline-block;
  max-width: 100%;
  text-decoration: none;

  ${p =>
    p.isDisabled &&
    `
    opacity: .5;
  `}

  &:hover {
    box-shadow: 0px 10px 20px -5px rgba(0,0,0,0.4);

    ${Nickname} {
      box-shadow: none;
      border-bottom-color: transparent;
    }
  }
`;

export const Result = ({ repo, emoji, isDisabled, children }) =>
  (<ResultStyled
    href={`https://github.com/${repo}`}
    target="_blank"
    rel="noopener noreferrer"
    isDisabled={isDisabled}
  >
    <div className="results-icon">{emoji}</div>

    <Nickname>@{children}</Nickname>
  </ResultStyled>);

export const Break = styled.br`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
