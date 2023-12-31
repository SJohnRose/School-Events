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
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <SchoolEvents />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
