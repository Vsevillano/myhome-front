import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";
import { GlobalLayout } from './components/themes/Layouts/GlobalLayout/GlobalLayout';
import { Home } from './pages/Home/Home';
import { Tareas } from './pages/Tareas/Tareas';
import { Signin } from './pages/Signin/Signin';
import { Profile } from './components/organisms/Profile/Profile';
import { ThemeProvider } from '@mui/material/styles';

import { myHomeTheme } from './styles/theme';


function App() {
  return (
    <ThemeProvider theme={myHomeTheme}>
    
      <Provider store={store}>  
        <BrowserRouter>
          
            <Routes>
              <Route path='/' element={<GlobalLayout/>}>
                <Route path='' element={<Home/>}/>
                <Route path='tareas' element={<Tareas/>}/>
                <Route path='login' element={<Signin/>}/>
                <Route path='profile' element={<Profile/>}/>
              </Route>
            </Routes>
          
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
