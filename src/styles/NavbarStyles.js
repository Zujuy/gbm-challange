import styled from "styled-components";

export const Navstyles = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const Imagestyles = styled.div`
  display: flex;
  width: 300px;

  @media (max-width: 425px) {
    justify-content: center;
  }
`
export const Image = styled.img`
  width: 200px;
`
export const LineStyles = styled.hr`
  width: 100%;
  margin-top: 30px;
  size: 15px;
`