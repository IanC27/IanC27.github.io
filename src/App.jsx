import { createTheme, ThemeProvider } from '@mui/material';
import { ThemeOptions } from './ThemeOptions';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header'
import Home from './Home'

import gameProjects from './assets/gameProjects';
import Project from './Project';

function App() {
  const theme = createTheme(ThemeOptions);

  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />

        {gameProjects.map((project => 
          (<Route key={project.title} path={project.url} element={
            <Project 
              content={project.page}
              title={project.title}
              roles={project.roles}
              skills={project.skills}
            />
          } />)
        ))}

      </Routes>
      </ThemeProvider>
    </BrowserRouter>
    
  )
}

export default App
