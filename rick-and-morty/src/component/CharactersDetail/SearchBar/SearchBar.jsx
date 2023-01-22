import { getName, cleanName } from "../../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from '../../CardCharacter/Card';

const SearchBar = () => {
const [search, setSearch] = useState('');
const dispatch = useDispatch();
const charName = useSelector((state) => state.charName);


const handleChange = (e) => {
    setSearch(e.target.value)
}


const handleClick = () => { 
if(!search) {
console.log('error');
}else {
    dispatch(getName(search))
}

}


useEffect(()=>{
if(search.length > 1 ){
    dispatch(getName(search))
}

    return() => dispatch(cleanName());
},[])


return(
        <div>
            <div className="Search">
                <input 
                name = 'search'
                onChange={handleChange} 
                placeholder='Seeker your Characters...' 
                value={search}/>
                <button onClick={handleClick}>
                    <Link to='/?name='>Seeker</Link>
                </button>
            </div>
            <div>
                {charName.map((character) => {
                    return (
                        <Card
                            key={character?.id}
                            id={character?.id}
                            name={character?.name}
                            gender={character?.gender}
                            image={character?.image}
                        />
                    )
                })
                }
            
            </div>

        </div>
)

}


export default SearchBar;