import Card from '../Card/Card';
import styled from './Cards.module.css';

export default function Cards({characters, onClose}) {
  
   return ( 
   <div className={styled.conteiner}>
      {characters.map(({id, name, species, gender, image}) => {
      return    <Card 
         key={id}
         id={id}
         name={name}
         species={species}
         gender={gender}
         image={image}
        onClose={()=> onClose(id)}
         />
      })}
   </div>
   );
}
