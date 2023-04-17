import styled from 'styled-components';

export const Container = styled.header`
  display:flex;
  justify-content: start;
  height: 5rem;
  background-color:#7695EC;
  width: 100vw;
  h1 {
    color: #ffffff;
    font-size: 22px;
    font-weight: 700;
    padding: 1.6rem 2rem;
  }
  @media (max-width: 800px) {
    justify-content: center;
  }
`;