import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background: #fff;
  width: 480px;
  border-radius: 8px;
  padding: 32px;

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong{
      font-size: 24px;
    }

    button {
      border: 0;
      background: transparent;
      line-height: 0;
    }
  }

  .status-container {
    margin-top: 32px;

    small {
      font-size: 14px;
      opacity: 0.8;
    }

    div {
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-weight: 500;
    font-size: 14px;
    opacity: .8;
  }
`;
