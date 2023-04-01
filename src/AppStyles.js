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
export const ResponsiveChart = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`
export const HeaderStyle = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1200px) {
    flex-direction: wrap;
    padding: 100px;
  }

  @media (max-width: 425px) {
    flex-direction: wrap;
    padding: 20px;
  }
`
export const TitleStyle = styled.h1`
  font-size: 30px;
  text-align: center;

  @media (max-width: 1200px) {
    font-size: 35px;
  }

  @media (max-width: 425px) {
    width: 300%;
    font-size: 25px;
  }
`
export const ChartStyle = styled.div`
  display: flex;
  justify-content: center;
`