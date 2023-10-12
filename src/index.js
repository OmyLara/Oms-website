import ReactDOM from 'react-dom/client';
import './index.css';
import React from 'react';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Primer from '../src/Components/Primer';
import Experience from './Components/Experience';
import Testimonio from './Components/About-me';
import Contact from './Components/Contact';
import ErrorPage from './Components/Error';
import Barra from './Components/Barra';

/*
const router= createBrowserRouter([
  {
  path: '/',
  element:<Primer />,
  errorElement: <ErrorPage />
},
{
  path: '/About-me',
  element: <Testimonio />,
},
{
  path: '/Experience',
  element: <Experience />,
},
{
  path: '/Contact',
  element: <Contact/>,
}

]);
*/

export default function App() {
  return (
     <Routes>
      
          <Route element={<Barra/>}>
          <Route path='/' element={<Primer />} errorElement={ErrorPage} />
          <Route path="About-me" element={<Testimonio />} />
          <Route path="Experience" element={<Experience />} />
          <Route path="Contact" element={<Contact />} />
          </Route>
          
        
      </Routes>
     
    
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  
  <App />
  </BrowserRouter>
  
);