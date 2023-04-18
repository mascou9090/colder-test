import styled from 'styled-components';

export const Container = styled.header`
  display:flex;
  justify-content: space-between;
  height: 5rem;
  background-color:#7695EC;
  width: 100vw;
  a {
    text-decoration: none;
  }
  h1 {
    color: #ffffff;
    font-size: 22px;
    font-weight: 700;
    padding: 1.6rem 2rem;
  }
  div {
    margin:2rem;
    margin-right: 5rem;
    p {
      color: #ffffff;
      font-size: 1.2rem;
      transition: 0.8s;
      &:hover {
        color: #c6c5fC;
        cursor: pointer;
        border-bottom: 3px solid #c6c5fC;
        animation: animationNav 0.8s ;
      }
      @keyframes animationNav {
        from {
          width:0%;
        } to {
          width:100%;
        }
      }
    }
  }
  @media (max-width: 800px) {
    justify-content: center;
  }
`;