import { Link } from "react-router-dom";

import './footer.css';

export default function Footer() {
    return (
        <div>
            <footer>
                <Link to="/">CINEVIDEO</Link>
                <p>Desenvolvido por Enisson Lemos Santos</p>
                <p> <strong>Contato:</strong> enissonlemos@gmail.com</p>
            </footer>
        </div>
    );
}