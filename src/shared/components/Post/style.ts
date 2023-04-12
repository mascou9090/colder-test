import styled from 'styled-components';

export const Container = styled.div`
  width: 752px;
  height: 334px;
  border-radius: 16px;
  margin:1.4rem auto;
  border: 1px solid #999999;
  background-color: #ffffff;
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
    background-color:#7695ec ;
    width:120px;
    height:32px;
    padding:0.4rem 2.2rem;
    border-radius: 8px;
    margin:6.4rem 0rem 0rem 38rem;
    color:#ffffff;
    cursor: pointer;
    }
  }
  textarea {
    margin-top: 1.8rem;
    padding: 0.4rem;
    border-radius: 8px;
    position:absolute;
  }
`; 