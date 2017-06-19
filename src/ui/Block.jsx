import styled from 'styled-components';

const margins = {
  xs: '20px',
  md: '50px',
};

export default styled.section`
  margin-bottom: ${p => margins[p.size] || '75px'};
  line-height: 1.7;

  p:last-child,
  .stage:last-child {
    margin-bottom: 0;
  }
`;
