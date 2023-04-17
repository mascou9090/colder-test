import styled from 'styled-components';

export const Container = styled.div<{valueInput?: boolean}>`
  width: 752px;
  height: 334px;
  border-radius: 16px;
  margin:1.4rem auto;
  border: 1px solid #999999;
  background-color: #ffffff;
  transition: 0.8s;
  h2 {
    font-weight: 700;
    font-size: 22px;
    color:#000000;
    margin:1.4rem 0rem 0rem 1.4rem;
  }
  div {
    display:flex;
    flex-direction: column;
    margin:1.4rem;
    label {
      display: flex;
      flex-direction: column;
      font-size: 16px;
      margin:0rem 0 0.4rem;
    }
    input {
      padding: 0.4rem 0.7rem;
      border-radius: 8px;
      border:1px solid #777777;
    }
    &:nth-child(4) {
    background-color:${props => (
      props.valueInput === false ? '#ccc' : '#7695ec'
    )};
    width:120px;
    height:32px;
    padding:0.4rem 2.2rem;
    border-radius: 8px;
    margin:6.4rem 0rem 0rem 38rem;
    color:#ffffff;
    cursor: ${props => props.valueInput === false ? 'not-allowed' : 'pointer'};
    }
  }
  textarea {
    margin-top: 1.8rem;
    padding: 0.6rem 0.7rem;
    border-radius: 8px;
    position:absolute;
  }
  @media (max-width: 800px) {
    width: 500px;
    h2 {
      margin: 1.4rem 9rem;
    }
    div {
      margin: 1.4rem 2rem;
      &:nth-child(3) {
        margin: 1rem 0.7rem;
        padding: 0rem 1.2rem;
      }
      &:nth-child(4) {
        text-align: center;
        margin: 6rem 0 0 6rem;
        width: 300px;
      }
    }
    textarea {
      padding: auto;
      width:440px;
      margin-top: 1.8rem;
      padding: 0.6rem 0.7rem;
    }
  }
  @media (max-width: 550px) {
    width: 300px;
    h2 {
      margin:1rem 2.5rem;
    }
    div {
      margin: 1.4rem 2rem;
      &:nth-child(3) {
        margin: 1rem 0.7rem;
        padding: 0rem 1.2rem;
      }
      &:nth-child(4) {
        text-align: center;
        margin: 6rem 0 0 2rem;
        width: 235px;
      }
    }
    textarea {
      padding: auto;
      width:235px;
      margin-top: 1.8rem;
      padding: 0.6rem 0.7rem;
    }
  }
`; 
