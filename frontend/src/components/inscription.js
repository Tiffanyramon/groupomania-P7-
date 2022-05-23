import '../styles/inscription.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Layout from '/layouts/layout';
import {useNavigate } from 'react-router-dom';

function Inscription(){

    const navigate = useNavigate()

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/api/user/signup", data)
        .then((result) => {
            localStorage.token = result.data.token
            navigate("/forum")
        })
        .catch((error) => console.log(error))
    }

    return (
        <Layout>

            <div>
                < div className="formulairedeux">
                    <form onSubmit= {handleSubmit(onSubmit)} action="" method="post">
                        <h1>Inscription</h1>
                        <div>
                            <label htmlFor="">nom</label>
                            <imput type="text"/>
                        </div>
                        <div>
                            <label htmlFor="">prénom</label>
                            <imput type="text"/>
                        </div>
                        <div>
                            <label htmlFor="">département</label>
                            <imput type="text" />
                        </div>
                        <div>
                            <label htmlFor="">email</label>
                            <imput type="email" {...register('email')} />
                        </div>
                        <div>
                            <label htmlFor="">mot de passe</label>
                            <imput type="password" {...register('password')} />
                        </div>
                            <h2>le mot de passe doit contenir minimun 1 majuscule,1 chiffre, 7 lettres</h2>
                            <button>inscription</button>
                            </form> 
            
                </div>
            </div>

        </Layout>
      
    )
   
    
  
}

export default Inscription