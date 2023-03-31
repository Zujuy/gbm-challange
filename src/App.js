import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {HeaderStyle, Container, TitleStyle, ChartStyle } from './AppStyles.js';

function IPCGraph() {
  const [ipcData, setIPCData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://run.mocky.io/v3/cc4c350b-1f11-42a0-a1aa-f8593eafeb1e');
      setIPCData(response.data);
    }

    fetchData();
  }, []);

  return (
    <LineChart width={800} height={400} data={ipcData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Price" stroke="#8884d8" />
    </LineChart>
  );
}

function App() {
  return (
    <Container>
      <HeaderStyle>
        <TitleStyle>IPC Indicator History</TitleStyle>
      </HeaderStyle>
      <ChartStyle>
      <IPCGraph />
      </ChartStyle>
    </Container>
  );
}

export default App;
