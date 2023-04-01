import React from 'react';
import {HeaderStyle, Container, TitleStyle} from './AppStyles.js';
import Auth from './auth/Auth';
import Navbar from './components/navbar';



function App() {

  return (
    <Container>
      <Navbar/>
      <HeaderStyle>
        <TitleStyle>IPC Indicator History</TitleStyle>
      </HeaderStyle>
      <Auth/>
    </Container>
  );
}

export default App;
