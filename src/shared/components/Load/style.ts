import styled from 'styled-components';

export const Container = styled.div`

  width: 40px;
  height: 40px;
  border: 8px solid #eee;
  border-bottom-color: #7695EC;
  border-radius: 50%;
  animation: rotate 1.5s linear infinite;
  margin: 0 auto;

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;