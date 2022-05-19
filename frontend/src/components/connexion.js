import '../styles/connexion.css';

function Connexion(){
    return (
        <div>
            <div className="formulaire">
            <form action="" method="post">
                <h1>Connexion</h1>
             <div>
                 <label htmlFor="">email</label>
                 <input type="email" />
             </div>
             <div>
                 <label htmlFor="">mot de passe</label>
                 <input type="password" />
                 <h2>le mot de passe doit contenir minimun 1 majuscule,1 chiffre, 7 lettres</h2>
        </div>
        <button>connexion</button>
        </form>
        </div>
        </div>
    )
   
  
}

export default Connexion