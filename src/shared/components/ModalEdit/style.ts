import styled from 'styled-components';

export const ModalContainer = styled.section`
    width:100vw;
    height:100vh;
    z-index:10;
    background-color:rgba(119,119,119,0.8);
    position: fixed;
    top:0;
    left:0;
`;

export const ModalInsid = styled.div`
      width:660px;
      height:334px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin:-4rem 0rem ;
      background-color:#ffffff;
      position:fixed;
      top: 40%;
      left: 30%;
      border-radius: 16px;
      border: 1px solid #999999;
      p {
        padding: 0.6rem 1.4rem 0rem;
        //border-radius: 16px 16px 0 0;
        font-weight: 700;
        font-size: 22px;
        //color:#000;
      }
   
      div {
        flex-direction: column;
        margin:1rem 1.4rem 0;
        label {
          margin: 0rem 0 0.4rem;
        }
        input {
          margin:0.1rem 0 1.4rem;
          padding: 0 0.5rem;
          background-color: #ffffff;
          border: 1px solid #777777;
          border-radius: 8px;
          height: 32px;
          width: 612px;
        }
        &:nth-child(3) {
          padding: 0rem 0rem 0rem 22.4rem;
          margin:0;
        }
      }
    
    button {
      background-color:#ffffff;
      width: 120px;
      height:32px;
      margin:0.8rem;
      border: 1px solid #000000;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 700;
      font-size: 16px;
      line-height: 18.75px;

      &:nth-child(2) {
        background-color:#47B960;
        color:#ffffff;
        border: none;
      }
    }
`;

export const inputDiv = styled.div`
  display: flex;
  flex-direction: column;
  textarea {
    margin-top: 0.5rem;
    padding: 0.4rem;
    border-radius: 8px;
    min-height: 74px;
    width: 612px;
  }
`;

