import '../styles/forum.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Layout from '../layouts/layout';
import {useNavigate } from 'react-router-dom';

function Forum(){

        const navigate = useNavigate()
    
        const { register, handleSubmit } = useForm();
   
        const onSubmit = (data) => {
            axios.post("http://localhost:3001/api/user/forum", data)
            .then((result) => {
                localStorage.token = result.data.token
                navigate("/forum")
            })
            .catch((error) => console.log(error))
        }
        return (
            <Layout>
    
                <div>
                    < div className="exprime">
                        <form onSubmit= {handleSubmit(onSubmit)} action="" method="post">
                            
                            <div>
                                <label htmlFor="">exprimez-vous...</label>
                                <input type="text"/>
                            </div>
                        
                                <button>Publier</button>
                                </form> 
                
                    </div>
                </div>
    
            </Layout>
        )
  
}

export default Forum