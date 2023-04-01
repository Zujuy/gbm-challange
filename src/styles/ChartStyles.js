import styled from "styled-components";

export const Container = styled.div`
  padding: 24px 40px;
  padding-bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    padding: 20px;
    justify-content: center;
  }

  @media (max-width: 425px) {
    padding: 0;
    justify-content: center;
  }
`