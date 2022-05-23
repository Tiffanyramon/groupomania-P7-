
import'../styles/header.css';
import'../styles/compte.css';
import'../styles/connexion.css';
import'../styles/forum.css';
import'../styles/inscription.css';

import Connexion from './connexion';
import Inscription from'./inscription';
import Forum from './forum';
import Compte from'./compte';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/forum" element={<Forum/>} />
        <Route path="/login" element={<Connexion/>} />
        <Route path="/signup" element={<Inscription/>} />
        <Route path="/compte" element={<Compte/>} />
      </Routes>
   </BrowserRouter>
  )

}

export default App;
