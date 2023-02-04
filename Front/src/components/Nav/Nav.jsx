import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import style from './Nav.module.css';


const Nav = ({onSearch}) => {
    return (
        <div className={style.conedor}>
            <div className={style.Nav_conteiner}>
                <Link className={style.logout} to='/home'>LOGOUT</Link>
                <Link className={style.About} to='/about'>About</Link>
                <Link className={style.home} to='/home'>Home</Link>
            </div>
            <div className={style.search_container} >
            <SearchBar  onSearch={onSearch}/>
            </div>
        </div>
    )
}

export default Nav;