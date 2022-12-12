import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import '../src/assets/bootstrap.min.css';

import DataProvider from './Context/DataProvider';

import { Box } from '@mui/material'

function App() {
  return (
    <DataProvider>
      <Header />
      <Box style={{ marginTop : 54 }}>
        <Home />
      </Box>
    </DataProvider>
  );
}

export default App;
