import { createTheme, ThemeProvider } from '@material-ui/core';
import Home from './components/Home';


const theme = createTheme({
  palette: {
    primary: {
      main: '#A3BBDD'
    },
    secondary:{ 
    main: '#3BBFA7'
    },
  },
})

function App() {

  return (
    <ThemeProvider theme={theme}> 
        <Home />  
    </ThemeProvider>
  );
}

export default App;
