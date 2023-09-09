import Logo from "./logo";
import "./style.css"



function Header() {
    return(
    <header className="header-app">
        <div className="header-in">
            <Logo></Logo>
            <nav className="navigation">
                <ul>
                    <li><a href="">Exemplo1</a></li>
                    <li><a href="">Exemplo1</a></li>
                    <li><a href="">Exemplo1</a></li>
                    <li><a href="">Exemplo1</a></li>
                </ul>
            </nav>
            <div className="btn">
                <button className="btnjs">Contato</button>
            </div>
        </div>
    </header>
    );
}

export default Header