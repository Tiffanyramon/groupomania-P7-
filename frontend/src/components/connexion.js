import '../style/connexion.css';

function connexion(){
     const title ='Groupomania'
     return (
          <div className='group-connexion'>
               <h1 className='group-title'>{title}</h1>
               <button onclick="connexion()">
                    connexion
               </button>
               <button onclick="s'identifier()">
                    s'indentifier
               </button>
          </div>
     )
  
}

export default connexion