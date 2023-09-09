import Logomarca from '../../imagens/logo.svg'
import "./style.css"
function Logo() {
    return(
        <div className="logo">
            <img src={Logomarca} alt="mipike" />
            <p>texto</p>
        </div>
    )
}

export default Logo;