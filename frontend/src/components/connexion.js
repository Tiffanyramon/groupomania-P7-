import '../styles/connexion.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
//import Layout from '../layouts/layoutun';
import {useNavigate } from 'react-router-dom';

function Connexion(){
    
    const navigate = useNavigate()

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {

        axios.post("http://localhost:3001/api/user/login", data)
        .then((result) => {
            localStorage.token =result.data.token
            axios.defaults.headers.common.Authorization = "Bearer " + result.data.token
            navigate("/forum")
        })
        .catch((error) => console.log(error))
    }

    return (
        //<Layout>
             
        <div className="container">
             <div className="formulaire">
                 <form  onSubmit={handleSubmit(onSubmit)} action="" method="post">
                 <h1>Connexion</h1>
                 <div>
                     <label htmlFor="">email</label>
                     <input type="email" {...register('email')} />
                 </div>
                 <div>
                     <label htmlFor="">mot de passe</label>
                     <input type="password" {...register('password')} />
                 </div>
                 <button>connexion</button>
                 <h2>Nouveau? <button>Inscrivez-vous!</button></h2>
                 </form>
             </div>
             <div class="ombre-1"> </div>
             <div class="ombre-2"> </div>
             <div class="ombre-3"> </div>
             <div class="ombre-4"> </div>
             <div class="ombre-5"> </div>
        </div>
        //</Layout>
        
    )
   
  
}

export default Connexion