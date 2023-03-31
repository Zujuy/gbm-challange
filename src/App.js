import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {HeaderStyle, Container, TitleStyle, ChartStyle, ResponsiveChart } from './AppStyles.js';

function Graph(props) {
const [ipcData, setIPCData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://run.mocky.io/v3/cc4c350b-1f11-42a0-a1aa-f8593eafeb1e');
      const {data} = response
      const timeData = data.map(item => {
      const timeString = item.date.split('T')[1].split('.')[0];
      const hour = timeString.split(':')[0];
      return {
        ...item,
        Time: hour
      };
    });
      setIPCData(timeData);
    }
    fetchData()
  }, [setIPCData]);

  return (
    <ResponsiveChart>
    <LineChart width={900} height={400} data={ipcData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey= "Time"/>
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="price" stroke="#8884d8" strokeDasharray="5 5" />
    </LineChart>
    </ResponsiveChart>
  );
}

function App() {
  return (
    <Container>
      <HeaderStyle>
        <TitleStyle>IPC Indicator History</TitleStyle>
      </HeaderStyle>
      <ChartStyle>
      <Graph/>
      </ChartStyle>
    </Container>
  );
}

export default App;
