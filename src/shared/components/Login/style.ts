import styled from 'styled-components';

export const Container = styled.div`
  background-color:#ffffff;
  transition: 0.8s;
  min-width:none;
  h2 {
    margin: 1.6rem 0 1.5rem 1.6rem;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
  }
  div {
    display:flex;
    flex-direction: column;
    margin:1rem;
    label {
      margin:0 0.7rem;
    }
    input {
      margin:0.5rem 0.7rem 0.2rem 0.7rem;
      padding:0.4rem 0.6rem;
      border-radius: 5px;
      border: solid 1px #777777;
    }
  }
  @media (max-width: 500px) {
    width:280px;
    margin:1rem;
    h2 {
      margin:0.5rem 1rem;
    }
    div {
      margin:0.8rem 0.5rem 0.5rem 0;
    }
  }
`;

export const Button = styled.div<{valueInput?: string}>`
    margin: 1rem 0rem 0rem 22.5rem !important;
    transition: 0.8s;
    width: 111px;
    color: #ffffff;
    background-color: ${
      props => (
        props.valueInput === '' ? '#ccc' : '#7695ec'
        )
      };
    border: transparent;
    border-radius: 5px;
    padding: 0.4rem 1.7rem;
    font-weight: 600;
    cursor:${
      props => (
        props.valueInput === '' ? 'not-allowed' : 'pointer'
        )};
    a{
      text-decoration: none;
      color: #ffffff;
      cursor:${
      props => (
        props.valueInput === '' ? 'not-allowed' : 'pointer'
        )};
    }
    @media (max-width: 500px) {
      margin:0 0 0 5rem !important;
    }
`;
