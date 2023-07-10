import './App.css';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import schoolevents from './images/schoolevents.png';

function App() {
  return (
    <Container maxWidth='lg'>
      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'> School Events </Typography>
        <img src={schoolevents} alt='schoolevents' height='60'/>
      </AppBar>
    </Container>
  );
}

export default App;
