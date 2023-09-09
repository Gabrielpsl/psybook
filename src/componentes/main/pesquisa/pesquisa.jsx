import "./pesquisa.css"


function Pesquisa() {
    return(
        <div className="pesquisaCamp">
            <div className="pesquisaCampo">
                <input className="pesquisar" type="text" placeholder="pesquise por seu livro aqui." />
                <br />
                <p>Seu livro está aqui</p>
            </div>
        </div>
    )
}

export default Pesquisa;