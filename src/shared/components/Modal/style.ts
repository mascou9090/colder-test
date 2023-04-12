import styled from 'styled-components';

export const ModalContainer = styled.div`
    background-color: rgba(119,119,119, 0.8);
    &:nth-child(2) {
      border-radius: 16px;
      border: 1px solid #999999;
      margin:auto;
      width:660px;
      height:146px;
      background-color:#ffffff;
      p {
        padding: 1.4rem;
        border-radius: 16px 16px 0 0;
        font-weight: 700;
        font-size: 22px;
      }
      div {
        display: flex;
        flex-direction: column;
        justify-content: end;
        margin:0rem 1rem 2rem 0rem;
        &:nth-child(2) {
          flex-direction: row;
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
    }
`;