import styled from 'styled-components';

export const H1 = styled.h1`
  text-align: center;
  font-style: italic;
  font-family: Arial;
  font-weight: bold;
  color: #ffffff;
  line-height: 63px;
  font-size: 50px;
  margin: 0px;
  text-transform: uppercase;
  margin-bottom: 25px;
`;

export const H2 = styled.h2`
  font-style: normal;
  font-family: Courier New, Courier, monospace;
  font-weight: 700;
  color: #ffffff;
  line-height: 44px;
  font-size: 35px;
  margin: 0;
  z-index: 1;
  position: relative;

  @media screen and (min-width: 992px) {
    margin-bottom: -25px;
    margin-left: -50px;
  }
`;

export const H3 = styled.h3`
  font-style: normal;
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: #0043ff;
  line-height: 30px;
  font-size: 24px;
  margin: 0px;
  font-weight: 400;
  padding-bottom: 10px;
`;
