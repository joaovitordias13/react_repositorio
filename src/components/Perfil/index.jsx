import styles from './Perfil.module.css';

//podemos fazer assim no react ao contrario disso const Perfil = () => e export default Perfil

export default ({ nomeUsuario }) => {
    
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src= {`https://github.com/${nomeUsuario}.png`}/>
            <h1 className={styles.name}>
                {nomeUsuario}
            </h1>
        </header>
    )
}
