import '../styles/connexion.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Layout from '/layout/layout';
import {useNavigate } from 'react-router-dom';

function Connexion(){
    
    const navigate = useNavigate()

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {

        axios.post("http://localhost:3001/api/user/login", data)
        .then((result) => {
            localStorage.token =result.data.token
            navigate("/forum")
        })
        .catch((error) => console.log(error))
    }

    return (
        <Layout>
             
        <div>
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
                     <h2>le mot de passe doit contenir minimun 1 majuscule,1 chiffre, 7 lettres</h2>
                 </div>
                 <button>connexion</button>
                 </form>
             </div>
        </div>
        </Layout>
        
    )
   
  
}

export default Connexion