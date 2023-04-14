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
      height:146px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin:0rem 1rem 2rem 0rem;
      background-color:#ffffff;
      position:fixed;
      top: 40%;
      left: 30%;
      border-radius: 16px;
        border: 1px solid #999999;
      p {
        padding: 1rem 1.9rem;
        border-radius: 16px 16px 0 0;
        font-weight: 700;
        font-size: 22px;
        color:#000;
      }
   
      div {
        &:nth-child(2) {
          margin:0 0 0 21.5rem;
        }
      }
    
    button {
      background-color:#ffffff;
      width: 120px;
      height:32px;
      margin:0.8rem;
      border: 1px solid #999999;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 500;
      font-size: 16px;
      line-height: 18.75px;

      &:nth-child(2) {
        background-color:#ff5151 ;
      }
    }
`;