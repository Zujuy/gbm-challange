import React from 'react';
import {HeaderStyle, Container, TitleStyle} from './AppStyles.js';
import Auth from './auth/Auth';



function App() {

  return (
    <Container>
      <HeaderStyle>
        <TitleStyle>IPC Indicator History</TitleStyle>
      </HeaderStyle>
      <Auth/>
    </Container>
  );
}

export default App;
