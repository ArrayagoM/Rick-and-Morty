import style from "./Detail.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";





const Detail = () => {

    const { detailId } = useParams();
    const [character, setCharacter] = useState({});


    

    useEffect(() => {
       
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            alert("No hay personajes con ese ID");
          });
        return setCharacter({});
        ;
      }, [detailId,])

    return(
        <div className={style.Detail_container} >

            <div>
              <div>
                <div classNmae={style.Detail_btn_conteiner}>
                <button className={style.galactic_button}>
                <Link to='/home' className={style.Deatail_link} >Home</Link>
                </button>
                
               </div>
                
                <h1 className={style.Detail_title}>{character?.name}</h1>
              </div>

              <div className={style.detail} >
                <div className={style.containerImg} >
                  <img className={style.Detail_imge} src={character?.image} alt={character?.name} />
                </div>

                <div>
                  <div className={style.Detail_status_conteiner}>
                  <label htmlFor="status" className={style.Detail_status}>Status: </label>
                  <p className={style.Detail_status_p} >{character?.status}</p>
                  </div>
                  <div className={style.Deatil_specie_conteiner}>
                  <label htmlFor="specie" className={style.Deatil_specie}>Specie: </label>
                  <p className={style.Detail_species_p}>{character?.species}</p>
                  </div>
                  <div className={style.Detail_gender_conteiner}>
                  <label htmlFor="gender" className={style.Detail_gender}>Gender: </label>
                  <p className={style.Detail_gender_p}>{character?.gender}</p>
                  </div>
                  <div className={style.Detail_origin_conteiner}>
                  <label htmlFor="origin" className={style.Detail_origin}>Origin: </label>
                  <p className={style.Detail_origin_p}>{character?.origin?.name}</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Detail;