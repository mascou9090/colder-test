import styled from 'styled-components';

export const Container = styled.div`
  margin:16rem auto;
  align-items:center;
  border-radius: 12px;
  border: 1px solid #cccccc;
  max-width: 500px;
  height: 205px;
  background-color: #ffffff;
  @media (max-width: 500px) {
    width: 310px;
  }
`;