import styled from 'styled-components';

export const Container = styled.div`
  width: 752px;
  min-height: 240px;
  border-radius: 16px;
  margin:1.4rem auto;
  border: 1px solid #999999;
  background-color: #ffffff;
  transition: 0.8s;
  header {
    background-color:#7695ec;
    display: flex;
    justify-content: space-between;
    height: 70px;
    border-radius: 16px 16px 0px 0px;
    h3 {
      padding: 1.5rem;
      color:#ffffff;
      overflow: hidden;
      }
      div {
        display: flex;
        justify-content: space-between;
        padding: 1.4rem;
        width: 7rem;
        transition: 0.6s;
        svg {
          cursor: pointer;
        }
      }
    }
  div {
    div {
      &:nth-child(1) {
      margin: 1rem 2rem 1rem 1rem;
      display:flex;
      justify-content: space-between;
      color:#777777;
      font-weight: 700;
      font-size: 18px;
    }
    &:nth-child(2) {
      margin: 1rem;
      font-weight: 700;
      font-size: 18px;
      overflow-y: auto;
      }
    }
  }
  @media (max-width: 800px) {
    width: 500px;
  }
  @media (max-width: 550px) {
    width: 300px;
  }
`;
