import './perfil.css'

//podemos fazer assim no react ao contrario disso const Perfil = () => e export default Perfil

export default ({ endereco, nome }) => {
    
    return (
        <div>
            <img className='perfil-avatar' src= {endereco}/>
            <h3 className='perfil-titulo'>{nome}</h3>
        </div>
    )
}
