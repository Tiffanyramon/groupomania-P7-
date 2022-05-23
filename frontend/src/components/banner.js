import '../styles/banner.css';

function Banner(){
     const title ='Groupomania'
     return (
          <div className='group-banner'>
               <h1 className='group-title'>{title}</h1>
               <button onclick="connexion()">
                    connexion
               </button>
               <button onclick="inscription()">
                    inscription
               </button>
               <button onclick="deconnexion()">
                    deconnexion
               </button>     
          </div>
     )
  
}

export default Banner