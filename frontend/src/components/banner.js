import '../style/banner.css';

function Banner(){
     const title ='Groupomania'
     return (
          <div className='group-banner'>
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

export default Banner