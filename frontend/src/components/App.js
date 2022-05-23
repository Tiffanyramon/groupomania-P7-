
import'../styles/banner.css';
import'../styles/compte.css';
import'../styles/connexion.css';
import'../styles/forum.css';
import'../styles/inscription.css';

import Connexion from './connexion';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Forum from '/forum';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/forum" element={<Forum/>} />
        <Route path="/login" element={<Connexion/>} />
      </Routes>
   </BrowserRouter>
  )

}

export default App;
