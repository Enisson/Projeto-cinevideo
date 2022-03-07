import { Link } from "react-router-dom";

import Logo from '../../assets/cinevideo.png';

import './header.css';

export default function Header() {
    return (
        <header>
            <Link to={'/'}><img src={Logo} alt="logo" /></Link>
            <Link className="favoritos" to="/favoritos">FAVORITOS</Link>
        </header>
    );
}