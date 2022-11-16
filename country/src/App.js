import { useLocation } from "react-router-dom";
import Allrouter from "./components/Allrouter";
import Datacon from "./components/Datacon";
import Navbar from "./components/Navbar";
import Picture from "./components/picture";


import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});
function App() {
  const l=useLocation()
  console.log(l,"df")
  return (
    
   <div>
    <Navbar/>
   <Allrouter/>
   </div>
   
  );
}

export default App;
